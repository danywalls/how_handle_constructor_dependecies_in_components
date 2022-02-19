import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent implements OnInit {

errors = [];
  signupForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  save() {
    if (!this.signupForm.valid) {
      this.showErrors();
    }
  }

  showErrors() {
    const emailError = this.signupForm.get('email').errors;
    console.log(emailError);
    Object.keys(emailError).forEach((value) => {
      this.errors = [...value];
    });
  }
}