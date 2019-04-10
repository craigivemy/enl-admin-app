import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TeamComponent} from './shared/components/teams/team/team.component';
import {AppComponent} from './app.component';

const routes: Routes = [
  {
    path: '',
    // homecomponent not appcoponent
    component: AppComponent
  },
  {
    path: 'teams',
    component: TeamComponent // this should be teams view not Team individual component or at least plural
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
