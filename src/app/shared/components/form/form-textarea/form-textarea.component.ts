import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from "@angular/forms";

import { MakeProvider, AbstractValueAccessor } from '../abstract-value-accessor';
import { IFormGeneral } from '../form-general.component';

@Component({
  moduleId: module.id,
  selector: 'form-textarea',
  templateUrl: 'form-textarea.component.html',
  providers: [ MakeProvider(FormTextareaComponent) ]
})
export class FormTextareaComponent extends AbstractValueAccessor implements IFormGeneral {
  constructor() {
    super();
   }

  // IFormGeneral properties
  @Input() label: string;
  @Input() isRequired: boolean;
  @Input() isRequiredErrorMessage: string;
  @Input() formControl: FormControl = new FormControl();

  @Input() model: any;
  @Output() modelChange = new EventEmitter();
  @Input() type: string;

  modelDidChange(newValue) {
    this.model = newValue;
    this.modelChange.emit(newValue);
  }

}
