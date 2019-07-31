import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {TeamListingComponent} from './club-team/components/team-listing/team-listing.component';
import {FixtureComponent} from './match/components/fixture/fixture.component';
import {UmpireComponent} from './umpire/components/umpire/umpire.component';

const routes: Routes = [
    {
        path: 'dashboard',
        component: HomeComponent
    },
    {
        path: 'teams',
        component: TeamListingComponent
    },
    {
        path: 'fixtures',
        component: FixtureComponent
    },
    {
        path: 'umpires',
        component: UmpireComponent
    },
    {
        path: 'history',
        loadChildren: () => import('./history/history.module').then(mod => mod.HistoryModule)
    },
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
