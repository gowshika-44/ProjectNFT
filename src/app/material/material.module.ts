import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import {MatDialogModule} from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSliderModule,
    MatDialogModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonToggleModule,
    MatOptionModule,
    MatSelectModule,
    MatSnackBarModule,
    MatButtonModule,
    MatGridListModule,
    MatListModule
    
  ],
  exports: [
    MatSliderModule,
    MatDialogModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonToggleModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatSnackBarModule,
    MatButtonModule,
    MatGridListModule,
    MatListModule
  ]
})
export class MaterialModule { }
