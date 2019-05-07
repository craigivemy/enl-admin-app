import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../../../store';
import {selectCurrentlySelectedSeason} from '../../../../store/season/season.selectors';
import {Observable} from 'rxjs';
import {AllFixturesBySeasonRequested} from '../../../../store/fixture/fixture.actions';
import {Fixture} from '../../../../shared/models/fixture.model';
import {selectAllFixturesFromSeason} from '../../../../store/fixture/fixture.selectors';

@Component({
  selector: 'app-fixture',
  templateUrl: './fixture.component.html',
  styleUrls: ['./fixture.component.css']
})
export class FixtureComponent implements OnInit {
  fixtures$: Observable<Fixture[]>;
  constructor(private store: Store<AppState>) { }
// todo - this should be a list component or in page directory?
  // todo - use switchMap ?
  // https://stackoverflow.com/questions/55892886/ngrx-passing-store-value-to-store-selector/55906871#55906871
  ngOnInit() {
    this.store
        .pipe(
            select(selectCurrentlySelectedSeason)
        ).subscribe(seasonId => {
      this.store.dispatch(new AllFixturesBySeasonRequested({seasonId}));
      this.fixtures$ = this.store
          .pipe(
              select(selectAllFixturesFromSeason(seasonId))
          );
    });
  }



}
