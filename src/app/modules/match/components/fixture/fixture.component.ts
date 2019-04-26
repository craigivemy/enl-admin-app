import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../../../store';
import {selectCurrentlySelectedSeason} from '../../../../store/season/season.selectors';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-fixture',
  templateUrl: './fixture.component.html',
  styleUrls: ['./fixture.component.css']
})
export class FixtureComponent implements OnInit {
  test$: Observable<any>;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.test$ = this.store
        .pipe(
            select(selectCurrentlySelectedSeason)
        );
  }

}
