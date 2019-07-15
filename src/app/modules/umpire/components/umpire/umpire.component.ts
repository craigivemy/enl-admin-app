import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Umpire} from '../../../../shared/models/umpire.model';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../../../store';
import {selectAllUmpires} from '../../../../store/umpire/umpire.selectors';
import {AllUmpiresRequested} from '../../../../store/umpire/umpire.actions';

@Component({
  selector: 'app-umpire',
  templateUrl: './umpire.component.html',
  styleUrls: ['./umpire.component.css']
})
export class UmpireComponent implements OnInit {
  constructor(private store: Store<AppState>) { }
  umpires$: Observable<Umpire[]>;

  ngOnInit() {
    this.store.dispatch(new AllUmpiresRequested());
    this.umpires$ = this.store
        .pipe(
            select(selectAllUmpires)
        );
  }

}
