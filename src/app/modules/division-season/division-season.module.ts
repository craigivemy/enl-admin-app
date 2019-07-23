import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppMaterialModule} from '../../app-material.module';
import {StoreModule} from '@ngrx/store';
import {seasonReducer} from '../../store/season/season.reducer';
import {EffectsModule} from '@ngrx/effects';
import {SeasonEffects} from '../../store/season/season.effects';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        AppMaterialModule,
        StoreModule.forFeature('seasons', seasonReducer),
        EffectsModule.forFeature([SeasonEffects])
    ]
})
export class DivisionSeasonModule { }
