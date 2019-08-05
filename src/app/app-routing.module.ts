import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {TeamListingComponent} from './club-team/components/team-listing/team-listing.component';
import {FixtureComponent} from './match/components/fixture/fixture.component';
import {UmpireComponent} from './umpire/components/umpire/umpire.component';
import {NewSeasonComponent} from './new-season/new-season.component';

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
        path: 'new-season',
        component: NewSeasonComponent
    },
    {
        path: 'history',
        loadChildren: () => import('./history/history.module').then(mod => mod.HistoryModule)
        /* todo - this is not lazy loading since it is imported already in app module - because it is needed
         * since I use an ngIf in app component to decide which to load!!!
         */
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
export class AppRoutingModule {
}
