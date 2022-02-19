import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BaseForm } from '../../core/baseForm';

@Component({
  selector: 'app-waiting-list',
  templateUrl: './waiting-list.component.html',
})
export class WaitingListComponent extends BaseForm {
  constructor(public fb: FormBuilder) {
    super(fb);
  }
}
