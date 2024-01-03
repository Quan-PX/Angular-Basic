import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { cilChevronLeft } from '@coreui/icons';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserDetailComponent {
  icons = { cilChevronLeft };

  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }
}
