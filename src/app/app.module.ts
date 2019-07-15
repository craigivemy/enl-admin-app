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
import { HomeComponent } from './modules/home/home.component';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {CustomSerializer} from './shared/utils';
import {EffectsModule} from '@ngrx/effects';
import {HttpClientModule} from '@angular/common/http';
import {ClubTeamModule} from './modules/club-team/club-team.module';
import { SeasonSelectorComponent } from './shared/components/season-selector/season-selector.component';
import {MatInputModule, MatOptionModule, MatSelectModule} from '@angular/material';
import {SeasonEffects} from './store/season/season.effects';
import {seasonReducer} from './store/season/season.reducer';
import {MatchModule} from './modules/match/match.module';
import {ReactiveFormsModule} from '@angular/forms';
import {UmpireModule} from './modules/umpire/umpire.module';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        SeasonSelectorComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        AppMaterialModule,
        HttpClientModule,
        ClubTeamModule,
        UmpireModule,
        MatchModule,
        ReactiveFormsModule,
        StoreModule.forRoot(reducers, {metaReducers}),
        StoreRouterConnectingModule.forRoot({
            serializer: CustomSerializer
        }),
        StoreModule.forFeature('seasons', seasonReducer),
        EffectsModule.forRoot([SeasonEffects]),
        !environment.production ? StoreDevtoolsModule.instrument() : [],
        MatInputModule,
        MatOptionModule,
        MatSelectModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
