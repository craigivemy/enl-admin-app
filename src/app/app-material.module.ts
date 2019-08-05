import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MatButtonModule, MatCardModule,
    MatDialogModule, MatIconModule,
    MatInputModule,
    MatListModule, MatOptionModule,
    MatSelectModule,
    MatSidenavModule, MatSnackBarModule,
    MatToolbarModule,
    MatStepperModule
} from '@angular/material';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MatInputModule,
        MatButtonModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatSelectModule,
        MatDialogModule,
        MatCardModule,
        MatIconModule,
        MatSnackBarModule,
        MatInputModule,
        MatOptionModule,
        MatSelectModule,
        MatStepperModule
    ],
    exports: [
        CommonModule,
        MatInputModule,
        MatButtonModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatDialogModule,
        MatCardModule,
        MatIconModule,
        MatSnackBarModule,
        MatInputModule,
        MatOptionModule,
        MatStepperModule,
        MatSelectModule // todo - should imports and exports really be the same here?
    ]
})
export class AppMaterialModule { }
