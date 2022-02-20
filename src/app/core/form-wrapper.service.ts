import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BaseForm } from './baseForm';

@Injectable()
export class FormWrapperService {
  public myform: FormGroup;

  public get bar(): string[] {
    return this._baseForm.errors;
  }
  private _baseForm: BaseForm;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this._baseForm = new BaseForm(this.fb, this.http, 'A');
    this.myform = this._baseForm.myform;
  }
}
