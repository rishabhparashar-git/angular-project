import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Subject, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from './user.model';

//it's optional but since it's a good practice to define the type of data you're working with in typescript
//we are creating this interface and this is how my authresponse data will look like
//http requests are generics so we can define the reponse type there as well using angular brackets '<type>
interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean; // this is only available in login response
}

@Injectable({ providedIn: 'root' })
export class AuthServices {
  // here I'm creating a new subject of type USER
  // this will always be accessible to all the components and will have the latest info of the user
  user = new Subject<User>();

  private apiKey: string = 'AIzaSyCVY_KTFxcw1EY11zeGQBNAe80CLZKrfRw';
  constructor(private http: HttpClient) {}

  signUp(email: string, password: string) {
    const url: string = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.apiKey}`;
    return this.http
      .post<AuthResponseData>(url, {
        email: email,
        password: password,
        returnSecureToken: true,
      })
      .pipe(
        catchError(this.handleError),
        tap((respData: any) => {
          this.handleAuthentication(
            respData.email,
            respData.localId,
            respData.idToken,
            +respData.expiresIn
          );
        })
      );
  }

  logIn(email: string, password: string) {
    const url: string = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.apiKey}`;
    return this.http
      .post<AuthResponseData>(url, {
        email: email,
        password: password,
        returnSecureToken: true,
      })
      .pipe(
        catchError(this.handleError),
        tap((respData: any) => {
          this.handleAuthentication(
            respData.email,
            respData.localId,
            respData.idToken,
            +respData.expiresIn
          );
        })
      );
  }

  //to handle errors
  private handleError(errorResponse: any) {
    let errorMessage;
    if (!errorResponse.error || !errorResponse.error.error) {
      errorMessage = 'Unknown Error Occurred';
      return throwError(errorMessage);
    }
    switch (errorResponse.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'The email address is already in use by another account';
        break;
      case 'OPERATION_NOT_ALLOWED':
        errorMessage = 'Password sign-in is disabled for this project';
        break;
      case 'TOO_MANY_ATTEMPTS_TRY_LATER':
        errorMessage =
          'We have blocked all requests from this device due to unusual activity. Try again later';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage =
          'There is no user with this email or the user may have been deleted.';
        break;
      case 'INVALID_PASSWORD':
        errorMessage =
          'The password is invalid or the user does not have a password';
        break;
      case 'USER_DISABLED':
        errorMessage = 'The user account has been disabled by an administrator';
        break;
      default:
        errorMessage = 'Unknown Error Occurred';
    }
    return throwError(errorMessage);
  }

  //to handle authentication
  private handleAuthentication(
    email: string,
    localId: string,
    token: string,
    expiresIn: number
  ) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(email, localId, token, expirationDate);
    this.user.next(user);
  }
}
