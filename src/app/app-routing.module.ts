import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './modules/home/home.component';
import {TeamComponent} from './modules/club-team/components/team/team.component';
import {FixtureComponent} from './modules/match/components/fixture/fixture.component';
import {UmpireComponent} from './modules/umpire/components/umpire/umpire.component';

const routes: Routes = [
    {
        path: 'dashboard',
        component: HomeComponent
    },
    {
        path: 'teams',
        component: TeamComponent // this should be teams view not Team individual component or at least plural
    },
    {
        path: 'fixtures',
        component: FixtureComponent
    },
    {
        path: 'umpires',
        component: UmpireComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
