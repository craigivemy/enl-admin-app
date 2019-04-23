import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FixtureComponent } from './components/fixture/fixture.component';
import {AppMaterialModule} from '../../app-material.module';

@NgModule({
    declarations: [
        FixtureComponent
    ],
    imports: [
        CommonModule,
        AppMaterialModule
    ]
})
export class FixtureModule { }
