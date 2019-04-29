import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../../../store';
import {selectCurrentlySelectedSeason} from '../../../../store/season/season.selectors';
import {Observable} from 'rxjs';
import {AllFixturesBySeasonRequested} from '../../../../store/fixture/fixture.actions';
import {Fixture} from '../../../../shared/models/fixture.model';
import {selectAllFixturesFromSeason} from '../../../../store/fixture/fixture.selectors';
import {map} from 'rxjs/operators';
import {tap} from 'rxjs/internal/operators/tap';



@Component({
  selector: 'app-fixture',
  templateUrl: './fixture.component.html',
  styleUrls: ['./fixture.component.css']
})
export class FixtureComponent implements OnInit {
  selectedSeasonId: number;
  fixtures$: Observable<Fixture[]>;
  constructor(private store: Store<AppState>) { }
// todo - this should be a list component or in page directory?
  ngOnInit() {
    this.store
        .pipe(
            select(selectCurrentlySelectedSeason),
            map(seasonId => this.selectedSeasonId = seasonId)
        ).subscribe();

    this.store.dispatch(new AllFixturesBySeasonRequested({seasonId: this.selectedSeasonId}));
    this.fixtures$ = this.store
        .pipe(
            select(selectAllFixturesFromSeason(this.selectedSeasonId))
        );
  }

}
