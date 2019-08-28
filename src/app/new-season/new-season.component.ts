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

@Component({
  selector: 'app-new-season',
  templateUrl: './new-season.component.html',
  styleUrls: ['./new-season.component.css']
})
export class NewSeasonComponent implements OnInit {
  allDivisions: Division[];
  selectedDivisions: Division[] = [];
  allTeams: Team[];
  divisionsFormArray: FormArray;
  teamsFormArray: FormArray;
  @Input() newSeasonStepper: MatHorizontalStepper;
  step1Valid = false;
  step2Valid = false;
  // todo - potentially use hidden form control that is required? Change method then adds to formControl array
  constructor(
      private fb: FormBuilder,
      private store: Store<AppState>
  ) {
      this.divisionsFormArray = this.fb.array([], Validators.minLength(1));
      this.teamsFormArray = this.fb.array([], Validators.minLength(2));
  }

  ngOnInit() {
    this.store.dispatch(new AllDivisionsRequested());
    this.store
        .pipe(
            select(selectAllDivisions)
        ).subscribe(divisions => this.allDivisions = divisions);

    // todo - remove tap here
    this.divisionsFormArray.valueChanges.pipe(tap((val) => console.log(''))).subscribe(
        val => this.step1Valid = val.length > 1
    );
    this.teamsFormArray.valueChanges.pipe(tap((val) => console.log(''))).subscribe(
        val => this.step2Valid = val.length > 2
    );
  }

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

  addToSelectedTeams(event, teamId: number, divisionId: number): void {
    if (event.checked) {
      this.teamsFormArray.push(this.fb.control(teamId));
    } else {
      for (let i = 0; i < this.teamsFormArray.controls.length; i++) {
        if (this.teamsFormArray.controls[i].value === teamId) {
          this.teamsFormArray.removeAt(i);
        }
      }
    }
  }

  loadDataForStep(index: number) {
    if (index === 1) {
      this.store.dispatch(new AllTeamsRequested());
      this.store
          .pipe(
              select(selectAllTeams)
          ).subscribe(teams => this.allTeams = teams);
    }
  }
}
