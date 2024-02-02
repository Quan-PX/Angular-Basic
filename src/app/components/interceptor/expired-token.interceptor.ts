import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthServerProvider } from 'src/app/services/auth/auth-jwt.service';
import { StateStorageService } from 'src/app/services/auth/stateStorage.service';

@Injectable()
export class ExpiredToken implements HttpInterceptor {
  constructor(
    private route: Router,
    private stateStorage: StateStorageService,
    private authServerProvider: AuthServerProvider
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap((req) => {
        const tokenTime = Number(this.stateStorage.getCurrentTokenTime());
        if (tokenTime && Date.now() - tokenTime < 7200000) {
          this.authServerProvider.logout().subscribe();
          this.route.navigate(['/login']);
        }
      })
    );
  }
}
