import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

export class BaseForm {
  errors = [];
  myform = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
  });

  constructor(public fb: FormBuilder) {
    
  }
  save() {
    if (!this.myform.valid) {
      this.showErrors();
    } else {
      this.errors = [];
      console.log('saving data!');
    }
  }

  showErrors() {
    const emailError = this.myform.get('email').errors;
    console.log(emailError);
    Object.keys(emailError).forEach((value) => {
      this.errors = [...value];
    });
  }
}
