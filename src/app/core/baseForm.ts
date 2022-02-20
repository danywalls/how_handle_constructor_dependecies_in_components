import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

export class BaseForm {
  errors = [];
  myform = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
  });

  constructor(
    public fb: FormBuilder,
    public http: HttpClient,
    public log: string
  ) {
    console.log(this.log);
  }
  save() {
    if (!this.myform.valid) {
      this.showErrors();
    } else {
      this.errors = [];
      console.log('saving data!');
    }
  }
  sendToAnalytics() {
    return this.http
      .post<any>('google.analytics.fake', { value: 'tracking' })
      .subscribe(() => {
        console.log('tracking');
      });
  }
  showErrors() {
    const emailError = this.myform.get('email').errors;
    console.log(emailError);
    Object.keys(emailError).forEach((value) => {
      this.errors = [...value];
    });
  }
}

@Injectable()
export class BaseFormWrapper {
  baseForm: BaseForm;
  constructor(public fb: FormBuilder, public http: HttpClient) {
    this.baseForm = new BaseForm(this.fb, this.http, 'HELLO');
  }
}
