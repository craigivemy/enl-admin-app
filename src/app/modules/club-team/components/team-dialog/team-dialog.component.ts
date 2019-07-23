import {AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../store';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Team} from '../../../../shared/models/team.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TeamService} from '../../team.service';
import {Update} from '@ngrx/entity';
import {TeamUpdated} from '../../../../store/team/team.actions';
import {distinctUntilChanged, exhaustMap, map, tap} from 'rxjs/operators';
import {fromEvent, Observable} from 'rxjs';

@Component({
    selector: 'app-team-dialog',
    templateUrl: './team-dialog.component.html',
    styleUrls: ['./team-dialog.component.css']
})
export class TeamDialogComponent implements OnInit, AfterViewInit {
    editTeamForm: FormGroup;
    teamId: number;
    name: string;
    formChanged$: Observable<boolean>;
    @ViewChild('saveButton', { read: ElementRef }) saveButton: ElementRef;

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
        this.formChanged$ = this.editTeamForm.valueChanges
            .pipe(
                map(value => true)
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
