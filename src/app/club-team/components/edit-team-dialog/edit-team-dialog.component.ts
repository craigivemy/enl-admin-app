import {AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../../store';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Team} from '../../../shared/models/team.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TeamService} from '../../team.service';
import {Update} from '@ngrx/entity';
import {TeamUpdated} from '../../../store/team/team.actions';
import {distinctUntilChanged, exhaustMap, map} from 'rxjs/operators';
import {fromEvent, Observable} from 'rxjs';
import {Division} from '../../../shared/models/division.model';
import {AllDivisionsRequested} from '../../../store/division/division.actions';
import {selectAllDivisions} from '../../../store/division/division.selectors';

@Component({
    selector: 'app-team-dialog',
    templateUrl: './edit-team-dialog.component.html',
    styleUrls: ['./edit-team-dialog.component.css']
})
export class EditTeamDialogComponent implements OnInit, AfterViewInit {
    editTeamForm: FormGroup;
    teamId: number;
    name: string;
    divisionId: number;
    divisions$: Observable<Division[]>;
    formChanged$: Observable<boolean>;
    @ViewChild('saveButton', { read: ElementRef }) saveButton: ElementRef;

    constructor(
        private store: Store<AppState>,
        private teamService: TeamService,
        private dialogRef: MatDialogRef<EditTeamDialogComponent>,
        private fb: FormBuilder,
        @Inject(MAT_DIALOG_DATA) team: Team
    ) {
        this.teamId = team.id;
        this.name = team.name;
        this.divisionId = team.division.id;

        this.editTeamForm = fb.group({
            name: [team.name, Validators.required],
            narrative: [team.narrative],
            division_id: [team.division.id, Validators.required]
        });

    }

    ngOnInit() {
        this.store.dispatch(new AllDivisionsRequested());
        this.divisions$ = this.store
            .pipe(
                select(selectAllDivisions)
            );

        this.formChanged$ = this.editTeamForm.valueChanges
            .pipe(
                map(() => true)
            );
    }

    ngAfterViewInit() {
        fromEvent(this.saveButton.nativeElement, 'click')
            .pipe(
                map(() => this.editTeamForm.value),
                distinctUntilChanged(),
                exhaustMap(() => this.updateTeam(this.editTeamForm.value))
            ).subscribe();
    }

    updateTeam(changes: Partial<Team>) {
        return this.teamService.updateTeam(this.teamId, changes)
            .pipe(
                map(() => {
                        const team: Update<Team> = {
                            id: this.teamId,
                            changes
                        };
                        this.store.dispatch(new TeamUpdated({team}));
                        this.dialogRef.close();
                    }
                )
            );
    }

}
