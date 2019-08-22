import { NgModule } from '@angular/core';
import { GrQuantInputComponent } from './quant-input/quant-input.component';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [GrQuantInputComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule.forRoot()
  ],
  exports: [GrQuantInputComponent]
})
export class GRCDModule { }
