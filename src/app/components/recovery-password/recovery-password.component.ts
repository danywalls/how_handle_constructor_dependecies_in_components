import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AbstractFormWrapper } from '../../core/abstract-form-wrapper';
import { FormWrapperTrackingService } from '../../core/form-wrapper-tracking.service';
import { FormWrapperService } from '../../core/form-wrapper.service';

@Component({
  selector: 'app-recovery-password',
  templateUrl: './recovery-password.component.html',
  styleUrls: ['./recovery-password.component.css'],
  providers: [
    {
      provide: AbstractFormWrapper,
      useClass: FormWrapperTrackingService,
    },
  ],
})
export class RecoveryPasswordComponent {
  myform: FormGroup;
  errors = [];
  constructor(private formWrapper: AbstractFormWrapper) {
    this.myform = formWrapper.myform;
  }
  save() {
    if (!this.formWrapper.save(this.myform)) {
      this.errors = this.formWrapper.errors;
    }
  }
}
