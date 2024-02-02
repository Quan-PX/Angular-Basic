import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class StateStorageService {
  private readonly TOKEN_KEY = 'authenticationToken';

  private readonly CURRENT_TIME_TOKEN = 'currentTokenTime';

  constructor() {}

  getTokenInLocalStorage(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  getTokenInSessionStorage(): string | null {
    return sessionStorage.getItem(this.TOKEN_KEY);
  }

  getCurrentTokenTime(): string | null {
    return sessionStorage.getItem(this.CURRENT_TIME_TOKEN);
  }

  setTokenInSessionStorage(token: string) {
    sessionStorage.setItem(this.TOKEN_KEY, token);
    sessionStorage.setItem(this.CURRENT_TIME_TOKEN, Date.now().toString());
  }

  setTokenInLocalStorage(token: string) {
    localStorage.setItem(this.TOKEN_KEY, token);
    localStorage.setItem(this.CURRENT_TIME_TOKEN, Date.now().toString());
  }

  removeToken() {
    localStorage.removeItem(this.TOKEN_KEY);
    sessionStorage.removeItem(this.TOKEN_KEY);
  }
}
