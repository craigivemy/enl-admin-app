import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../../store';
import {AllSeasonsRequested, SelectedSeasonUpdated} from '../../../store/season/season.actions';
import {Observable} from 'rxjs';
import {Season} from '../../models/season.model';
import {select} from '@ngrx/store';
import {selectAllSeasons, selectCurrentSeasonId} from '../../../store/season/season.selectors';
import {FormControl} from '@angular/forms';

@Component({
    selector: 'app-season-selector',
    templateUrl: './season-selector.component.html',
    styleUrls: ['./season-selector.component.css']
})
export class SeasonSelectorComponent implements OnInit {

    constructor(private store: Store<AppState>) { }

    seasons$: Observable<Season[]>;
    selected: any;
    seasonSelect = new FormControl('');

    ngOnInit() {
        this.store.dispatch(new AllSeasonsRequested());
        this.seasons$ = this.store.pipe(
            select(selectAllSeasons)
        );
        this.selected = this.store
            .pipe(
                select(selectCurrentSeasonId)
            )
            .subscribe(seasonId => this.setInitialValue(seasonId));

        this.seasonSelect.valueChanges
            .subscribe(value => this.store.dispatch(new SelectedSeasonUpdated({seasonId: value})));

    }

    setInitialValue(value: number): void {
        this.seasonSelect.setValue(value);
    }
}
