import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { GrQuantInputComponent } from './quant-input/quant-input.component';
import { IonicModule } from '@ionic/angular';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [GrQuantInputComponent, SpinnerComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
  ],
  exports: [GrQuantInputComponent]
})
export class GRCDModule { }
