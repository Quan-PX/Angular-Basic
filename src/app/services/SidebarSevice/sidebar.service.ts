import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class StatusService {
  private statusSubject = new BehaviorSubject<boolean>(true);

  getStatus() {
    return this.statusSubject.asObservable();
  }

  setStatus(status: boolean) {
    this.statusSubject.next(status);
  }
}