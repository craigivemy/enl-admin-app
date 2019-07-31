import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamListingComponent } from './components/team-listing/team-listing.component';
import {ClubComponent} from './components/club/club.component';
import {StoreModule} from '@ngrx/store';
import {teamReducer} from '../store/team/team.reducer';
import {EffectsModule} from '@ngrx/effects';
import {TeamEffects} from '../store/team/team.effects';
import {AppMaterialModule} from '../app-material.module';
import { EditTeamDialogComponent } from './components/edit-team-dialog/edit-team-dialog.component';
import {ReactiveFormsModule} from '@angular/forms';
import { AddTeamDialogComponent } from './components/add-team-dialog/add-team-dialog.component';

@NgModule({
    declarations: [TeamListingComponent, ClubComponent, EditTeamDialogComponent, AddTeamDialogComponent],
    imports: [
        CommonModule,
        AppMaterialModule,
        StoreModule.forFeature('teams', teamReducer),
        EffectsModule.forFeature([TeamEffects]),
        ReactiveFormsModule
    ],
    entryComponents: [EditTeamDialogComponent, AddTeamDialogComponent]
})
export class ClubTeamModule { }
