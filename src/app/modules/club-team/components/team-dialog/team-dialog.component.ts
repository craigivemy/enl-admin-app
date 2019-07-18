import {Component, Inject, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../store';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Team} from '../../../../shared/models/team.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TeamService} from '../../team.service';

@Component({
  selector: 'app-team-dialog',
  templateUrl: './team-dialog.component.html',
  styleUrls: ['./team-dialog.component.css']
})
export class TeamDialogComponent implements OnInit {
  editTeamForm: FormGroup;
  teamId: number;
  name: string;

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
      division: [team.division, Validators.required]
    });

  }

  ngOnInit() {
  }

  updateTeam() {
    const formChanges = this.editTeamForm.value;
    this.teamService.updateTeam(this.teamId, formChanges)
        .subscribe(response => console.log(response));


  }

}
