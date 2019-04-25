import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../../../store';
import {selectCurrentSeasonId} from '../../../../store/season/season.selectors';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-fixture',
  templateUrl: './fixture.component.html',
  styleUrls: ['./fixture.component.css']
})
export class FixtureComponent implements OnInit {
  test$: Observable<number>;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.test$ = this.store
        .pipe(
            select(selectCurrentSeasonId)
        );
  }

}
