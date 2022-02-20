import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AbstractFormWrapper } from './abstract-form-wrapper';
import { BaseForm } from './baseForm';

@Injectable()
export class FormWrapperTrackingService implements AbstractFormWrapper {
  private _anotherBaseForm: BaseForm;
  myform: FormGroup;
  public get errors(): string[] {
    return this.translationToSpanish();
  }
  constructor(private fb: FormBuilder, private http: HttpClient) {
    this._anotherBaseForm = new BaseForm(this.fb, this.http, 'A');
    this.myform = this._anotherBaseForm.myform;
  }

  save(form: FormGroup): boolean {
    this._anotherBaseForm.myform = form;
    this._anotherBaseForm.save();
    console.log('sending data to another service');
    return this._anotherBaseForm.errors.length === 0;
  }

  private translationToSpanish(): string[] {
    return this._anotherBaseForm.errors.map((a) => {
      return this.translate(a);
    });
  }

  private translate(string) {
    return 'Un error';
  }
}
