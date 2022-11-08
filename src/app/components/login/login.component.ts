import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthServices } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private http: HttpClient, private authService: AuthServices) {}

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
    this.isLoading = true;
    const email = form.value.email;
    const password = form.value.password;

    if (this.displayLogin) {
      // do login
      this.authService.logIn(email, password).subscribe(
        (resp) => {
          console.log(resp)
          this.isLoading = false;
        },
        (errMessage) => {
          this.error = errMessage;
          this.isLoading = false;
        }
      );
    } else {
      // do registration
      this.authService.signUp(email, password).subscribe(
        //if we get response
        (resp) => {
          console.log(resp);
          this.isLoading = false;
        },
        //if we get errors
        (errMessage) => {
          // now we directly get error message because it's thrown from the auth service itself
          this.error = errMessage;
          this.isLoading = false;
        }
      );
    }
    form.reset();
  }

  //to close the alert panel
  closeHandler() {
    this.error = '';
  }
}
