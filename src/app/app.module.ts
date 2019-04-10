import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { ClubComponent } from './shared/components/clubs/club/club.component';
import { TeamComponent } from './shared/components/teams/team/team.component';
import {AppMaterialModule} from './app-material.module';
import { HomeComponent } from './home/home.component';
import { TeamsComponent } from './shared/components/teams/teams.component';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {CustomSerializer} from './shared/utils';
import {EffectsModule} from '@ngrx/effects';
import {teamsReducer} from './store/teams/teams.reducer';
import {TeamsEffects} from './store/teams/teams.effects';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        ClubComponent,
        TeamComponent,
        HomeComponent,
        TeamsComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        AppMaterialModule,
        HttpClientModule,
        StoreModule.forRoot(reducers, { metaReducers }),
        StoreRouterConnectingModule.forRoot({
            serializer: CustomSerializer
        }),
        StoreModule.forFeature('teams', teamsReducer),
        EffectsModule.forRoot([]),
        EffectsModule.forFeature([TeamsEffects]),
        !environment.production ? StoreDevtoolsModule.instrument() : []
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
