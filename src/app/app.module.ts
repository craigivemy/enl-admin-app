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
import {MatInputModule, MatOptionModule, MatSelectModule} from '@angular/material';
import {SeasonEffects} from './store/season/season.effects';
import {seasonReducer} from './store/season/season.reducer';
import {MatchModule} from './match/match.module';
import {ReactiveFormsModule} from '@angular/forms';
import {UmpireModule} from './umpire/umpire.module';
import {DivisionSeasonModule} from './division-season/division-season.module';
import {SharedModule} from './shared/shared.module';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent
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
        !environment.production ? StoreDevtoolsModule.instrument() : []
    ],
    providers: [],
    exports: [

    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
