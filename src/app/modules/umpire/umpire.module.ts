import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UmpireComponent} from './components/umpire/umpire.component';
import {AppMaterialModule} from '../../app-material.module';
import {StoreModule} from '@ngrx/store';
import {umpireReducer} from '../../store/umpire/umpire.reducer';
import {EffectsModule} from '@ngrx/effects';
import {UmpireEffects} from '../../store/umpire/umpire.effects';

@NgModule({
    declarations: [
        UmpireComponent
    ],
    imports: [
        CommonModule,
        AppMaterialModule,
        StoreModule.forFeature('umpires', umpireReducer),
        EffectsModule.forFeature([UmpireEffects])
    ]
})
export class UmpireModule {
}
