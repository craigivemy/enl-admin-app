import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
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
  @Input() newSeasonStepper: MatHorizontalStepper;
  step1Valid = false;
  constructor(
      private fb: FormBuilder,
      private store: Store<AppState>
  ) {
  }

  ngOnInit() {
    this.store.dispatch(new AllDivisionsRequested());
    this.store
        .pipe(
            select(selectAllDivisions)
        ).subscribe(divisions => this.allDivisions = divisions);

  }

  addToSelectedDivisions(divisionsId: number): void {
    this.selectedDivisions.push(divisionsId);
    console.log(this.selectedDivisions);
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
