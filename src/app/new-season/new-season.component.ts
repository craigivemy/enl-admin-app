import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {select, Store} from '@ngrx/store';
import {AppState} from '../store';
import {Division} from '../shared/models/division.model';
import {Observable} from 'rxjs';
import {selectAllDivisions} from '../store/division/division.selectors';
import {AllDivisionsRequested} from '../store/division/division.actions';

@Component({
  selector: 'app-new-season',
  templateUrl: './new-season.component.html',
  styleUrls: ['./new-season.component.css']
})
export class NewSeasonComponent implements OnInit {
  chooseDivisions: FormGroup;
  chooseTeams: FormGroup;
  divisions$: Observable<Division[]>;
  constructor(
      private fb: FormBuilder,
      private store: Store<AppState>
  ) {
    this.chooseDivisions = this.fb.group({
        chooseDivisions: ['', Validators.required],
        chooseTeams: ['', Validators.required]
    });


  }

  ngOnInit() {
    this.store.dispatch(new AllDivisionsRequested());
    this.divisions$ = this.store
        .pipe(
            select(selectAllDivisions)
        );
  }

}
