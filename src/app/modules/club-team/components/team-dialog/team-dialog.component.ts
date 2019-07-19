import {Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../store';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Team} from '../../../../shared/models/team.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TeamService} from '../../team.service';
import {Update} from '@ngrx/entity';
import {TeamUpdated} from '../../../../store/team/team.actions';

@Component({
  selector: 'app-team-dialog',
  templateUrl: './team-dialog.component.html',
  styleUrls: ['./team-dialog.component.css']
})
export class TeamDialogComponent implements OnInit {
  editTeamForm: FormGroup;
  teamId: number;
  name: string;
  @ViewChild('saveButton') saveButton: ElementRef;

  constructor(
      private store: Store<AppState>,
      private teamService: TeamService,
      private dialogRef: MatDialogRef<TeamDialogComponent>,
      private fb: FormBuilder,
      @Inject(MAT_DIALOG_DATA) team: Team
  ) {
    this.teamId = team.id;
    this.name = team.name;

    this.editTeamForm = fb.group({
      name: [team.name, Validators.required],
      narrative: [team.narrative],
     // division: [team.division, Validators.required]
    });

  }

  ngOnInit() {
  }

  // ngAfterViewInit() {
  //
  //   fromEvent(this.saveButton.nativeElement, 'click')
  //       .pipe(
  //           exhaustMap(() => this.saveCourse(this.form.value))
  //       )
  //       .subscribe();
  //
  // }

  updateTeam() {
    const changes = this.editTeamForm.value;
    this.teamService.updateTeam(this.teamId, changes)
        .subscribe(
            () => {
              const team: Update<Team> = {
                id: this.teamId,
                changes
              };
              this.store.dispatch(new TeamUpdated({team}));
              this.dialogRef.close();
            }
        );
  }

}
