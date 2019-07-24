import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamListingComponent } from './components/team-listing/team-listing.component';
import {ClubComponent} from './components/club/club.component';
import {StoreModule} from '@ngrx/store';
import {teamReducer} from '../../store/team/team.reducer';
import {EffectsModule} from '@ngrx/effects';
import {TeamEffects} from '../../store/team/team.effects';
import {AppMaterialModule} from '../../app-material.module';
import { TeamDialogComponent } from './components/team-dialog/team-dialog.component';
import {ReactiveFormsModule} from '@angular/forms';
import { AddTeamDialogComponent } from './components/add-team-dialog/add-team-dialog.component';
import {DivisionSelectorComponent} from '../../shared/components/division-selector/division-selector.component';

@NgModule({
    declarations: [TeamListingComponent, ClubComponent, TeamDialogComponent, AddTeamDialogComponent, DivisionSelectorComponent],
    imports: [
        CommonModule,
        AppMaterialModule,
        StoreModule.forFeature('teams', teamReducer),
        EffectsModule.forFeature([TeamEffects]),
        ReactiveFormsModule
    ],
    entryComponents: [TeamDialogComponent, AddTeamDialogComponent]
})
export class ClubTeamModule { }
