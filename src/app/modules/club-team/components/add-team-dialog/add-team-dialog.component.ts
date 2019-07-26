import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../../../store';
import {fromEvent, Observable} from 'rxjs';
import {Division} from '../../../../shared/models/division.model';
import {AllDivisionsRequested} from '../../../../store/division/division.actions';
import {selectAllDivisions} from '../../../../store/division/division.selectors';
import {TeamService} from '../../team.service';
import {distinctUntilChanged, exhaustMap, map, tap} from 'rxjs/operators';
import {Team} from '../../../../shared/models/team.model';
import {TeamAdded} from '../../../../store/team/team.actions';
import {MatDialogRef, MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-add-team-dialog',
  templateUrl: './add-team-dialog.component.html',
  styleUrls: ['./add-team-dialog.component.css']
})
export class AddTeamDialogComponent implements OnInit, AfterViewInit {
  divisions$: Observable<Division[]>;
  addTeamForm: FormGroup;
  @ViewChild('saveButton', { read: ElementRef }) saveButton: ElementRef;
  constructor(
      private fb: FormBuilder,
      private store: Store<AppState>,
      private teamService: TeamService,
      private dialogRef: MatDialogRef<AddTeamDialogComponent>,
      private snackBar: MatSnackBar
  ) {
    this.addTeamForm = fb.group({
      name: ['', Validators.required],
      narrative: [''],
      division_id: ['', Validators.required]
    });
  }
  ngOnInit() {
    this.store.dispatch(new AllDivisionsRequested());
    this.divisions$ = this.store
        .pipe(
            select(selectAllDivisions)
        );
  }

  ngAfterViewInit() {
    fromEvent(this.saveButton.nativeElement, 'click')
        .pipe(
            map(() => this.addTeamForm.value),
            distinctUntilChanged(),
            exhaustMap(() => this.addTeam(this.addTeamForm.value))
        ).subscribe();
  }

  addTeam(team: Team) {
    // todo - handle 409 errors, and any error shouldn't stop them trying again
    return this.teamService.addTeam(team)
        .pipe(
            tap(created => console.log(created)),
            map((createdTeam) => {
              this.store.dispatch(new TeamAdded({team: createdTeam["data"]}));
              this.dialogRef.close();
              this.snackBar.open('Test', 'UNDO');
            })
        );
  }

  undoAddTeam() {

  }

}
