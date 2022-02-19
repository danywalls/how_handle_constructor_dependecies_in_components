import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-waiting-list',
  templateUrl: './waiting-list.component.html',

})
export class WaitingListComponent implements OnInit {
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