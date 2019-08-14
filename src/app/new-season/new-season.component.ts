import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl} from '@angular/forms';
import {select, Store} from '@ngrx/store';
import {AppState} from '../store';
import {Division} from '../shared/models/division.model';
import {selectAllDivisions} from '../store/division/division.selectors';
import {AllDivisionsRequested} from '../store/division/division.actions';
import {Team} from '../shared/models/team.model';
import {MatHorizontalStepper} from '@angular/material';
import {selectAllTeams} from '../store/team/team.selectors';
import {AllTeamsRequested} from '../store/team/team.actions';

@Component({
  selector: 'app-new-season',
  templateUrl: './new-season.component.html',
  styleUrls: ['./new-season.component.css']
})
export class NewSeasonComponent implements OnInit {
  selectedDivisions: number[] = [];
  allDivisions: Division[];
  allTeams: Team[];
  selectedTest: FormArray;
  @Input() newSeasonStepper: MatHorizontalStepper;
  step1Valid = false;
  // todo - potentially use hidden form control that is required? Change method then adds to formControl array
  constructor(
      private fb: FormBuilder,
      private store: Store<AppState>
  ) {
      this.selectedTest = this.fb.array([]);
  }

  ngOnInit() {
    this.store.dispatch(new AllDivisionsRequested());
    this.store
        .pipe(
            select(selectAllDivisions)
        ).subscribe(divisions => this.allDivisions = divisions);

    this.selectedTest.valueChanges.subscribe(
        (val) => console.log(val)
    );
  }

  addToSelectedDivisions(event, divisionId: number): void {
    if (event.checked) {
      this.selectedTest.push(this.fb.control(divisionId));
    } else {
      for (let i = 0; i < this.selectedTest.controls.length; i++) {
        if (this.selectedTest.controls[i].value === divisionId) {
          this.selectedTest.removeAt(i);
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
