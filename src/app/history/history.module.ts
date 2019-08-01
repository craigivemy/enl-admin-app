import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HistoryRoutingModule} from './history-routing.module';
import {HistoryHomeComponent} from './history-home/history-home.component';
import {HistoryTeamListingComponent} from './history-team-listing/history-team-listing.component';
import {AppMaterialModule} from '../app-material.module';
import {SharedModule} from '../shared/shared.module';
import { HistoryNavComponent } from './history-nav/history-nav.component';

@NgModule({
    declarations: [HistoryHomeComponent, HistoryTeamListingComponent, HistoryNavComponent],
    exports: [
        HistoryNavComponent
    ],
    imports: [
        CommonModule,
        HistoryRoutingModule,
        AppMaterialModule,
        SharedModule,
    ]
})
export class HistoryModule {
}
