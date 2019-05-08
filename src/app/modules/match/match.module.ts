import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FixtureComponent } from './components/fixture/fixture.component';
import {AppMaterialModule} from '../../app-material.module';
import {StoreModule} from '@ngrx/store';
import {fixtureReducer} from '../../store/fixture/fixture.reducer';
import {EffectsModule} from '@ngrx/effects';
import {FixtureEffects} from '../../store/fixture/fixture.effects';

@NgModule({
    declarations: [
        FixtureComponent
    ],
    imports: [
        CommonModule,
        AppMaterialModule,
        StoreModule.forFeature('fixtures', fixtureReducer),
        EffectsModule.forFeature([FixtureEffects])
    ]
})
export class MatchModule { }
