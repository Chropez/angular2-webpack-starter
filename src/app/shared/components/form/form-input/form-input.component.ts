import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from "@angular/forms";

import { MakeProvider, AbstractValueAccessor } from '../abstract-value-accessor';
import { IFormGeneral } from '../form-general.component';

@Component({
  moduleId: module.id,
  selector: 'form-input',
  templateUrl: 'form-input.component.html',
  providers: [ MakeProvider(FormInputComponent) ]
})
export class FormInputComponent extends AbstractValueAccessor implements IFormGeneral {
  constructor() {
    super();
   }

  // IFormGeneral properties
  @Input() label: string;
  @Input() isRequired: boolean;
  @Input() isRequiredErrorMessage: string;
  @Input() formControl: FormControl = new FormControl();

  @Input() type: string = 'text';
  @Input() model: any;
  @Output() modelChange = new EventEmitter();

  modelDidChange(newValue) {
    this.model = newValue;
    this.modelChange.emit(newValue);
  }
}
