import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BaseForm } from '../../core/baseForm';

@Component({
  selector: 'app-recovery-password',
  templateUrl: './recovery-password.component.html',
  styleUrls: ['./recovery-password.component.css'],
})
export class RecoveryPasswordComponent extends BaseForm {
  constructor(public fb: FormBuilder, public http: HttpClient) {
    super(fb, http, 'HELLO');
  }
}
