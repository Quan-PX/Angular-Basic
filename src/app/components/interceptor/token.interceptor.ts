import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StateStorageService } from 'src/app/services/auth/stateStorage.service';

@Injectable({ providedIn: 'root' })
export class TokenInterceptor implements HttpInterceptor {
  constructor(private stateStorage: StateStorageService) {}

  intercept(
    req: HttpRequest<any>, // request treen duong di thi chen them dc gi vao
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const tokenInLocalStorage = this.stateStorage.getTokenInLocalStorage();
    const tokenInSessionStorage = this.stateStorage.getTokenInSessionStorage();
    if (tokenInLocalStorage || tokenInSessionStorage) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${
            tokenInLocalStorage || tokenInSessionStorage
          }`,
        },
      });
      console.log(req);
      return next.handle(req);
    } else {
      return next.handle(req);
    }

    // throw new Error('Method not implemented.');
  }
}
