import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamComponent } from './components/team/team.component';
import {ClubComponent} from './components/club/club.component';
import {StoreModule} from '@ngrx/store';
import {clubReducer} from '../../store/club/club.reducer';
import {EffectsModule} from '@ngrx/effects';
import {ClubEffects} from '../../store/club/club.effects';
import {AppMaterialModule} from '../../app-material.module';

@NgModule({
    declarations: [TeamComponent, ClubComponent],
    imports: [
        CommonModule,
        AppMaterialModule,
        StoreModule.forFeature('teams', clubReducer),
        EffectsModule.forFeature([ClubEffects]),
    ]
})
export class ClubModule { }
