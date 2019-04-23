import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../../store';
import {AllSeasonsRequested} from '../../../store/season/season.actions';
import {Observable} from 'rxjs';
import {Season} from '../../models/season.model';
import {select} from '@ngrx/store';
import {selectAllSeasons} from '../../../store/season/season.selectors';
import {FormControl} from '@angular/forms';
import {pipe} from 'rxjs/internal/util/pipe';
import {tap} from 'rxjs/internal/operators/tap';

@Component({
  selector: 'app-season-selector',
  templateUrl: './season-selector.component.html',
  styleUrls: ['./season-selector.component.css']
})
export class SeasonSelectorComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  seasons$: Observable<Season[]>;
  selectedSeason = new FormControl('');

  ngOnInit() {
    this.store.dispatch(new AllSeasonsRequested());
    this.seasons$ = this.store.pipe(
        select(selectAllSeasons)
    );
    this.selectedSeason.valueChanges
        .pipe(
          // dispatch action
        ).subscribe();
  }
}
