import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { ClubComponent } from './modules/club/components/club/club.component';
import {AppMaterialModule} from './app-material.module';
import { HomeComponent } from './modules/home/home.component';
import { TeamComponent } from './modules/club/components/team/team.component';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {CustomSerializer} from './shared/utils';
import {EffectsModule} from '@ngrx/effects';
import {clubReducer} from './modules/club/store/club.reducer';
import {ClubEffects} from './modules/club/store/club.effects';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        ClubComponent,
        TeamComponent,
        HomeComponent
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
        StoreModule.forFeature('teams', clubReducer),
        EffectsModule.forRoot([]),
        EffectsModule.forFeature([ClubEffects]),
        !environment.production ? StoreDevtoolsModule.instrument() : []
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
