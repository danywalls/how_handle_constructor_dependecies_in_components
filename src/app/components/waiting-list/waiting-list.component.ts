import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BaseForm } from '../../core/baseForm';
import { FormWrapperService } from '../../core/form-wrapper.service';

@Component({
  selector: 'app-waiting-list',
  templateUrl: './waiting-list.component.html',
})
export class WaitingListComponent {
  myform: FormGroup;
  errors: [];
  constructor(private formWrapper: FormWrapperService) {
    this.myform = formWrapper.myform;
  }
  save() {}
}
