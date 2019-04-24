import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../../store';
import {AllSeasonsRequested} from '../../../store/season/season.actions';
import {Observable} from 'rxjs';
import {Season} from '../../models/season.model';
import {select} from '@ngrx/store';
import {selectAllSeasons, selectCurrentSeason} from '../../../store/season/season.selectors';
import {FormControl} from '@angular/forms';
import {pipe} from 'rxjs/internal/util/pipe';
import {tap} from 'rxjs/internal/operators/tap';
import {first} from 'rxjs/internal/operators/first';
import {map, take} from 'rxjs/operators';

@Component({
    selector: 'app-season-selector',
    templateUrl: './season-selector.component.html',
    styleUrls: ['./season-selector.component.css']
})
export class SeasonSelectorComponent implements OnInit {

    constructor(private store: Store<AppState>) { }

    seasons$: Observable<Season[]>;
    selected$: Observable<Season>;
    seasonSelect = new FormControl('');

    ngOnInit() {
        this.store.dispatch(new AllSeasonsRequested());
        this.seasons$ = this.store.pipe(
            select(selectAllSeasons)
        );
        this.selected$ = this.store
            .pipe(
                select(selectCurrentSeason),
                take(1),
                map(season => season[0])
            );
        this.seasonSelect.valueChanges
            .pipe(
                // dispatch action
                // store selector for currentlySelectedSeason?
            ).subscribe(); // make this a subject?
    }
}
