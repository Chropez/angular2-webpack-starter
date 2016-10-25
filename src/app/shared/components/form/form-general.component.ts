import { Component, Input, Output, ElementRef } from '@angular/core';
import { FormControl, ControlValueAccessor } from '@angular/forms';

import { MakeProvider } from './abstract-value-accessor';

@Component({
  moduleId: module.id,
  selector: 'form-general',
  templateUrl: './form-general.component.html',
  styleUrls: ['./form-general.component.css'],
  providers: [ MakeProvider(FormGeneralComponent)]
})
export class FormGeneralComponent implements IFormGeneral, ControlValueAccessor {
  constructor() { }

  @Input() formControl: FormControl;
  @Input() label: string;

  @Input() isRequired: boolean = false;
  @Input() isRequiredErrorMessage: string = '';

  get isValid() : boolean {
    return this.formControl.valid && !this.formControl.pristine;
  }

  get isInvalid() : boolean {
    return !this.formControl.valid && !this.formControl.pristine;
  }

  get hasFeedback() : boolean {
    return this.isValid || this.isInvalid;
  }

  // ControlValueAccessor
  writeValue(value: any) : void { }

  registerOnChange(fn: any) : void { }

  registerOnTouched(fn: any) : void { }
}

export interface IFormGeneral {
  label: string;
  isRequired: boolean;
  isRequiredErrorMessage: string;
  formControl: FormControl;
}
