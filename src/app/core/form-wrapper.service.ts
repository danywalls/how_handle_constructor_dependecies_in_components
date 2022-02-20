import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AbstractFormWrapper } from './abstract-form-wrapper';
import { BaseForm } from './baseForm';

@Injectable()
export class FormWrapperService implements AbstractFormWrapper {
  public myform: FormGroup;

  public get errors(): string[] {
    return this._baseForm.errors;
  }
  private _baseForm: BaseForm;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this._baseForm = new BaseForm(this.fb, this.http, 'A');
    this.myform = this._baseForm.myform;
  }
  save(form: FormGroup): boolean {
    this._baseForm.myform = form;
    this._baseForm.save();
    return this._baseForm.errors.length === 0;
  }
}
