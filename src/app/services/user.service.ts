import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { SERVER_API_URL } from 'src/constants';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) {}

  registerUser(newUser: any): Observable<HttpResponse<any>> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http
      .post(SERVER_API_URL + 'api/register', newUser, {
        observe: 'response',
        headers,
      })
      .pipe(
        tap((response: HttpResponse<any>) => {
          console.log(response);
        })
      );
  }

  updateUser(user: any): Observable<HttpResponse<any>> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const { id } = user;
    return this.http
      .put(SERVER_API_URL + `api/${id}`, user, {
        observe: 'response',
        headers,
      })
      .pipe(
        tap((req) => {
          console.log(req);
        })
      );
  }

  getAllUser(param?: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const params = new HttpParams();
    params.append('limit', param?.limit);
    params.append('page', param?.page); //?limit=10&page=0

    return this.http.get(SERVER_API_URL + `api/users?limit=10&page=0`, {
      // params,
      headers,
      observe: 'response',
    });
  }

  getUserById(id: number): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http
      .get(SERVER_API_URL + `api/user/${id}`, {
        headers,
        observe: 'response',
      })
      .pipe(
        tap((response: any) => {
          console.log(response);
        })
      );
  }

  deleteUser(user: any): Observable<HttpResponse<any>> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const { id } = user;
    return this.http
      .delete(SERVER_API_URL + `api/${id}`, { headers, observe: 'response' })
      .pipe(
        tap((req) => {
          if (req.ok) {
            alert('Xóa người dùng thành công');
          }
        })
      );
  }
}
