import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { cilChevronLeft } from '@coreui/icons';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserUpdateComponent {
  icons = { cilChevronLeft };

  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }
}
