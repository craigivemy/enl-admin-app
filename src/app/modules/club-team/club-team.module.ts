import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamComponent } from './components/team/team.component';
import {ClubComponent} from './components/club/club.component';
import {StoreModule} from '@ngrx/store';
import {teamReducer} from '../../store/team/team.reducer';
import {EffectsModule} from '@ngrx/effects';
import {TeamEffects} from '../../store/team/team.effects';
import {AppMaterialModule} from '../../app-material.module';

@NgModule({
    declarations: [TeamComponent, ClubComponent],
    imports: [
        CommonModule,
        AppMaterialModule,
        StoreModule.forFeature('teams', teamReducer),
        EffectsModule.forFeature([TeamEffects])
    ]
})
export class ClubTeamModule { }
