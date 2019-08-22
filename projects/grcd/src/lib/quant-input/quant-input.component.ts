import { ChangeDetectionStrategy, Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';

@Component({
  selector: 'gr-quant-input',
  templateUrl: './quant-input.component.html',
  styleUrls: ['./quant-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => GrQuantInputComponent),
      multi: true
    }
  ]
})
export class GrQuantInputComponent implements ControlValueAccessor {

  @Input() value = 1;
  valueCtrl: FormControl;
  @Input() label: string;
  @Input() max: number;
  @Input() disabled = false;
  onChange = (value: number) => { };
  onTouched = () => { };

  constructor() {
    this.valueCtrl = new FormControl(this.value);
  }

  writeValue(value: number): void {
    this.value = value;
    this.valueCtrl.setValue(value);
    this.onChange(value);
  }

  registerOnChange(fn: (value: number) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  add() {
    if (this.max) {
      if (this.max > this.value) {
        this.value += 1;
        this.valueCtrl.setValue(this.value);
      } return;
    }
    this.value += 1;
    this.valueCtrl.setValue(this.value);
  }

  sub() {
    if (this.value > 1) {
      this.value -= 1;
    }
    this.valueCtrl.setValue(this.value);
  }

  ionChange(value: any) {
    value = parseFloat(value);
    if (this.max) {
      if (this.max >= value) {
        this.writeValue(value);
      } else {
        this.writeValue(this.max);
      }
    } else {
      this.writeValue(value);
    }
  }
}
