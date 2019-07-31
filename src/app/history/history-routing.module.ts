import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HistoryHomeComponent} from './history-home/history-home.component';
import {HistoryTeamListingComponent} from './history-team-listing/history-team-listing.component';

const routes: Routes = [
  {
    path: 'teams',
    component: HistoryTeamListingComponent
  },
  {
    path: '',
    component: HistoryHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistoryRoutingModule { }
