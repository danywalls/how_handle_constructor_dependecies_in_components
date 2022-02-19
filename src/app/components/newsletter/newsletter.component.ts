import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
})
export class NewsletterComponent implements OnInit {
  errors = [];
  newsLetterForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  save() {
    if (!this.newsLetterForm.valid) {
      this.showErrors();
    } else {
      this.errors = [];
      console.log('saving data!')
    }
  }

  showErrors() {
    const emailError = this.newsLetterForm.get('email').errors;
    console.log(emailError);
    Object.keys(emailError).forEach((value) => {
      this.errors = [...value];
    });
  }
}
