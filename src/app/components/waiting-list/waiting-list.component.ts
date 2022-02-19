import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-waiting-list',
  templateUrl: './waiting-list.component.html',

})
export class WaitingListComponent implements OnInit {
errors = [];
  waitingListForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  save() {
    if (!this.waitingListForm.valid) {
      this.showErrors();
    }
    else {
      this.errors = [];
    }
  }

  showErrors() {
    const emailError = this.waitingListForm.get('email').errors;
    console.log(emailError);
    Object.keys(emailError).forEach((value) => {
      this.errors = [...value];
    });
  }

}