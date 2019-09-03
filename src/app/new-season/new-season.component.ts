import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, Validators} from '@angular/forms';
import {select, Store} from '@ngrx/store';
import {AppState} from '../store';
import {Division} from '../shared/models/division.model';
import {selectAllDivisions} from '../store/division/division.selectors';
import {AllDivisionsRequested} from '../store/division/division.actions';
import {Team} from '../shared/models/team.model';
import {MatHorizontalStepper} from '@angular/material';
import {selectAllTeams} from '../store/team/team.selectors';
import {AllTeamsRequested} from '../store/team/team.actions';
import {tap} from 'rxjs/operators';
import {TeamService} from '../club-team/team.service';
import {DivisionService} from '../division-season/division.service';

@Component({
  selector: 'app-new-season',
  templateUrl: './new-season.component.html',
  styleUrls: ['./new-season.component.css']
})
export class NewSeasonComponent implements OnInit {
  allDivisions: Division[];
  selectedDivisions: Division[] = [];
  allTeams: Team[];
  selectedTeams: Team[] = [];
  teamsAssignedToDivisions: any[] = [];
  divisionsFormArray: FormArray;
  teamsFormArray: FormArray;
  @Input() newSeasonStepper: MatHorizontalStepper;
  step1Valid = false;
  step2Valid = false;
  step3Valid = false;

  constructor(
      private fb: FormBuilder,
      private store: Store<AppState>,
      private teamService: TeamService,
      private divisionService: DivisionService
  ) {
      this.divisionsFormArray = this.fb.array([], Validators.minLength(1));
      this.teamsFormArray = this.fb.array([], Validators.minLength(2));
  }

  ngOnInit() {
    this.divisionService.getAllDivisions().subscribe(
        divisions => this.allDivisions = divisions
    );

    this.divisionsFormArray.valueChanges.pipe().subscribe(
        val => this.step1Valid = val.length > 1
    );
    this.teamsFormArray.valueChanges.pipe().subscribe(
        val => this.step2Valid = val.length > 2
    );
  }

  // todo - use id as key in array to make this more efficient rather than looping
  addToSelectedDivisions(event, division: Division): void {
    if (event.checked) {
      this.divisionsFormArray.push(this.fb.control(division));
      this.selectedDivisions.push(division);
      console.log(this.selectedDivisions);
    } else {
      for (let i = 0; i < this.divisionsFormArray.controls.length; i++) {
        if (this.divisionsFormArray.controls[i].value === division.id) {
          this.divisionsFormArray.removeAt(i);
        }
      }
      for (let i = 0; i < this.selectedDivisions.length; i++) {
        if (this.selectedDivisions[i].id === division.id) {
          this.selectedDivisions.splice(i, 1);
        }
        console.log(this.selectedDivisions);
      }
    }
  }

  addToSelectedTeams(event, team: Team): void {
    if (event.checked) {
      this.teamsFormArray.push(this.fb.control(team));
      this.selectedTeams.push(team);
    } else {
      for (let i = 0; i < this.teamsFormArray.controls.length; i++) {
        if (this.teamsFormArray.controls[i].value === team.id) {
          this.teamsFormArray.removeAt(i);
        }
      }
      for (let i = 0; i < this.selectedTeams.length; i++) {
        if (this.selectedTeams[i].id === team.id) {
          this.selectedTeams.splice(i, 1);
        }
        console.log(this.selectedTeams);
      }
    }
  }

  loadDataForStep(index: number) {
    if (index === 1) {
      this.teamService.getAllTeams().subscribe(
          teams => this.allTeams = teams
      );
    }
  }

  addSelectedTeamsToDivisions(event: any, team: Team) {
    // todo - only if value is actually selected not removed, also need to consider back button!
    this.teamsAssignedToDivisions.push('');
    this.selectedTeams.map(
        selectedTeam => {
          if (selectedTeam.id === team.id) {
            selectedTeam.division = event.value;
          }
        }
    );
    if (this.selectedTeams.length === this.teamsAssignedToDivisions.length) {
      this.step3Valid = true;
    }
  }
}
