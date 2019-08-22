import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { GrQuantInputComponent } from './quant-input/quant-input.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [GrQuantInputComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
  ],
  exports: [GrQuantInputComponent]
})
export class GRCDModule { }
