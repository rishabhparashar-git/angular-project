import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor() {}

  displayLogin: boolean = false;

  switchMode() {
    this.displayLogin = !this.displayLogin;
  }

  public isLoading: boolean = false;
  public error: string = '';

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    this.isLoading = true;
    if (this.displayLogin) {
      // do login
    } else {
      // do registration
    }
    this.isLoading = false;
  }

  closeHandler() {
    this.error = '';
  }
}
