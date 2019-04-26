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
  seasonId$;
  fixtures$: Observable<Fixture[]>;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.seasonId$ = this.store
        .pipe(
            select(selectCurrentlySelectedSeason)
        ).subscribe();
    // todo - this is wrong surely, passing id to requested and select?
    this.store.dispatch(new AllFixturesBySeasonRequested(this.seasonId$));
    this.fixtures$ = this.store
        .pipe(
            select(selectAllFixturesFromSeason(this.seasonId$))
        );
  }

}
