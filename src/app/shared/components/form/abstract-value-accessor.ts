import {
  Component,
  Input,
  Output,
  EventEmitter,
  Provider,
  forwardRef
} from '@angular/core';

import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  FormControl
} from "@angular/forms";

export function MakeProvider(type : any){
  return {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => type),
    multi: true
  };
}

export abstract class AbstractValueAccessor implements ControlValueAccessor {
  formControl: FormControl = new FormControl();

  writeValue(value: any) : void {
    this.formControl.setValue(value);
  }

  registerOnChange(fn: any) : void {
    this.formControl.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any) : void {
    this.formControl.valueChanges.subscribe(fn);
  }
}
