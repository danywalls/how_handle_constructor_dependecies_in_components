import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AbstractFormWrapper } from '../../core/abstract-form-wrapper';
import { FormWrapperService } from '../../core/form-wrapper.service';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  providers: [
    {
      provide: AbstractFormWrapper,
      useClass: FormWrapperService,
    },
  ],
})
export class NewsletterComponent {
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
