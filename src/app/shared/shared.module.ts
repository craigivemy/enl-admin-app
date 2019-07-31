import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SeasonSelectorComponent} from './components/season-selector/season-selector.component';
import {AppMaterialModule} from '../app-material.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [SeasonSelectorComponent],
  imports: [
    CommonModule,
    AppMaterialModule, // todo - why importing if already imported in shared module?
    ReactiveFormsModule
  ],
  exports: [
      SeasonSelectorComponent
  ]
})
export class SharedModule { }
