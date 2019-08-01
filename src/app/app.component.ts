import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {AppState} from './store';
import {selectIfSelectedSeasonCurrentSeason} from './store/season/season.selectors';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
// todo - remove onInit and logic here, put nav in own component
export class AppComponent implements OnInit {
  viewingCurrentData: boolean;
  constructor(
      private store: Store<AppState>,
      private router: Router,
      private location: Location) {
      this.router.events.subscribe(
          () => this.viewingCurrentData = this.location.path().indexOf('history') === -1
      );
  }
  title = 'enl-admin-app';
  isCurrentSeasonSelected$: Observable<boolean>;
  ngOnInit() {
    this.isCurrentSeasonSelected$ = this.store
        .pipe(
            select(selectIfSelectedSeasonCurrentSeason)
        );
  }
}
