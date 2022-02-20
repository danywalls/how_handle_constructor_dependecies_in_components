import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AbstractFormWrapper } from '../../core/abstract-form-wrapper';
import { FormWrapperService } from '../../core/form-wrapper.service';

@Component({
  selector: 'app-waiting-list',
  templateUrl: './waiting-list.component.html',
  providers: [
    {
      provide: AbstractFormWrapper,
      useClass: FormWrapperService,
    },
  ],
})
export class WaitingListComponent {
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
