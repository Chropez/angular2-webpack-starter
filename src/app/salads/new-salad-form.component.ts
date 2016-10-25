import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Salad } from '../shared/models/salad';
import { FormSelectOption } from '../shared/components/form/form-select/form-select.component';

@Component({
  moduleId: module.id,
  selector: 'new-salad-form',
  templateUrl: 'new-salad-form.component.html',
  styleUrls: ['new-salad-form.component.css']
})
export class NewSaladFormComponent {
  constructor(formBuilder : FormBuilder) {
    this.model = new Salad(0, '', '', 0, 50);

    this.form = formBuilder.group({
      name:        [ this.model.name, Validators.minLength(10)  ],
      ingredients: [ this.model.ingredients, Validators.required ],
      saladType:   [ this.model.saladType, Validators.required],
      price:       [ this.model.price ]
    });


  }

  form : FormGroup;
  model : Salad;
  saladTypeOptions : FormSelectOption[] = [
    new FormSelectOption(0, 'Grön'),
    new FormSelectOption(1, 'Pasta')
  ];

  @Output() onSubmit = new EventEmitter();

  submit() {
    let s = this.form;
    debugger;
    this.onSubmit.emit(this.model);
  }
}
