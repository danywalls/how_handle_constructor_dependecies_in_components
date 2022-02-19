import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BaseForm } from '../../core/baseForm';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
})
export class NewsletterComponent extends BaseForm {
  constructor(public fb: FormBuilder) {
    super(fb);
  }
}
