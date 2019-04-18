import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FixtureComponent } from './components/fixture/fixture.component';
import {AppMaterialModule} from '../../app-material.module';
import {SeasonSelectorComponent} from '../../shared/components/season-selector/season-selector.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
    declarations: [
        FixtureComponent,
        SeasonSelectorComponent // todo need to work out how to handle this when in other modules - shared module?
    ],
    imports: [
        CommonModule,
        AppMaterialModule,
        ReactiveFormsModule
    ]
})
export class FixtureModule { }
