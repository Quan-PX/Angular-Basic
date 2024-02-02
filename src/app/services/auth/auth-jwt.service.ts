import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { SERVER_API_URL } from 'src/constants';
import { StateStorageService } from './stateStorage.service';

@Injectable({ providedIn: 'root' })
export class AuthServerProvider {
  constructor(
    private stateStorage: StateStorageService,
    private http: HttpClient
  ) {}

  login(credentials: any): Observable<HttpResponse<any>> {
    // const authenticateSuccess = (resp: any) => {
    //   const bearerToken = resp.headers.get('Authorization');         // tạo sao khi interceptor lại phải clone vì request ko thể sửa trực tiếp được
    //   if (bearerToken && bearerToken.slice(0, 7) === 'Bearer ') {    // ==> phải clone vè set lại header
    //     const jwt = bearerToken.slice(7, bearerToken.length);
    //     // this.storeAuthenticationToken(jwt, credentials.rememberMe);
    //     return jwt;
    //   }
    // };

    // return this.http
    //   .post(SERVER_API_URL + 'api/login', data, { observe: 'response' })
    //   .pipe(map(authenticateSuccess.bind(this)));

    const header = new HttpHeaders({
      // 'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    });

    return this.http
      .post(SERVER_API_URL + 'api/authenticate', credentials, {
        headers: header,
        observe: 'response',
      })
      .pipe(
        tap((response: HttpResponse<any>) => {
          if (response.ok) {
            const u = response.body;
            if (credentials['rememberMe']) {
              this.stateStorage.setTokenInLocalStorage(response.body);
            } else {
              this.stateStorage.setTokenInSessionStorage(response.body);
            }
          }
        })
      );
  }

  // loginWithToken(jwt: any, rememberMe?: any) {
  //   if (jwt) {
  //     this.storeAuthenticationToken(jwt, rememberMe);
  //     return Promise.resolve(jwt);
  //   } else {
  //     return Promise.reject('auth-jwt-service Promise reject'); // Put appropriate error message here
  //   }
  // }

  storeAuthenticationToken(jwt: any, rememberMe?: any) {
    if (rememberMe) {
      //   this.$localStorage.store('authenticationToken', jwt);
      localStorage.setItem('authenticationToken', jwt);
    } else {
      //   this.$sessionStorage.store('authenticationToken', jwt);
      sessionStorage.setItem('authenticationToken', jwt);
    }
  }

  logout(): Observable<any> {
    return new Observable((observer) => {
      localStorage.removeItem('authenticationToken');
      localStorage.removeItem('currentTokenTime');
      sessionStorage.removeItem('authenticationToken');
      sessionStorage.removeItem('currentTokenTime');
      observer.complete();
    });
  }
}
