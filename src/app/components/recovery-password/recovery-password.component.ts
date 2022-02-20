import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormWrapperService } from '../../core/form-wrapper.service';

@Component({
  selector: 'app-recovery-password',
  templateUrl: './recovery-password.component.html',
  styleUrls: ['./recovery-password.component.css'],
})
export class RecoveryPasswordComponent  {
  myform: FormGroup;
  errors = [];
  constructor(private formWrapper: FormWrapperService) {
    this.myform = formWrapper.myform;
  }
  save() {
    if (!this.formWrapper.save(this.myform)) {
      this.errors = this.formWrapper.errors;
    }
  }
}
