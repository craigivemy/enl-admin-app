import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TeamListingComponent} from '../club-team/components/team-listing/team-listing.component';
import {HistoryHomeComponent} from './history-home/history-home.component';

const routes: Routes = [
  // {
  //   path: '/history/teams',
  //   component: TeamListingComponent // change to history team listing
  // },
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
