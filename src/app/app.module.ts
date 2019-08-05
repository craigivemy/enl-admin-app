import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import {AppMaterialModule} from './app-material.module';
import { HomeComponent } from './home/home.component';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {CustomSerializer} from './shared/utils';
import {EffectsModule} from '@ngrx/effects';
import {HttpClientModule} from '@angular/common/http';
import {ClubTeamModule} from './club-team/club-team.module';
import {SeasonEffects} from './store/season/season.effects';
import {seasonReducer} from './store/season/season.reducer';
import {MatchModule} from './match/match.module';
import {ReactiveFormsModule} from '@angular/forms';
import {UmpireModule} from './umpire/umpire.module';
import {DivisionSeasonModule} from './division-season/division-season.module';
import {SharedModule} from './shared/shared.module';
import { DefaultNavComponent } from './default-nav/default-nav.component';
import {HistoryModule} from './history/history.module';
import { NewSeasonComponent } from './new-season/new-season.component';
import {MatCheckboxModule} from '@angular/material';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        DefaultNavComponent,
        NewSeasonComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        AppMaterialModule,
        HttpClientModule,
        SharedModule,
        ClubTeamModule,
        UmpireModule,
        MatchModule,
        DivisionSeasonModule,
        ReactiveFormsModule,
        StoreModule.forRoot(reducers, {metaReducers}),
        StoreRouterConnectingModule.forRoot({
            serializer: CustomSerializer
        }),
        StoreModule.forFeature('seasons', seasonReducer),
        EffectsModule.forRoot([SeasonEffects]),
        !environment.production ? StoreDevtoolsModule.instrument() : [],
        HistoryModule,
        MatCheckboxModule
    ],
    providers: [],
    exports: [

    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
