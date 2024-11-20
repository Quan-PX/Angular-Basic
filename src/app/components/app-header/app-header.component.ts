import { Component, EventEmitter, Output } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import {
  ButtonModule,
  ContainerComponent,
  DropdownComponent,
  HeaderModule,
  ModalModule,
  NavModule,
} from '@coreui/angular-pro';
import {
  cilAccountLogout,
  cilBell,
  cilHome,
  cilList,
  cilUser,
} from '@coreui/icons';
import { IconModule } from '@coreui/icons-angular';
import { AuthServerProvider } from 'src/app/services/auth/auth-jwt.service';

@Component({
  selector: 'app-header-custom',
  templateUrl: './app-header.component.html',
  standalone: true,
  styleUrls: ['./app-header.component.scss'],
  imports: [
    IconModule,
    HeaderModule,
    ContainerComponent,
    NavModule,
    DropdownComponent,
    RouterLink,
    ButtonModule,
    ModalModule
  ],
})
export class AppHeaderComponent {
  icons = { cilList, cilUser, cilHome, cilBell, cilAccountLogout };
  @Output() visibleSideBar = new EventEmitter<boolean>();
  stateVisibale: boolean = false;

  visibleModalLogout = false

  constructor(private authServerProvider: AuthServerProvider, private route: Router) {}

  handleToggleStatus() {
    this.stateVisibale = !this.stateVisibale;
    this.visibleSideBar.emit(this.stateVisibale);
  }

  toggleModalLogout(){
    this.visibleModalLogout = !this.visibleModalLogout
  }

  handleChangeModal(event:any){
    // console.log(event) handle change out modal true false
    this.visibleModalLogout = event
  }

  handleLogoutAccount() {
    this.authServerProvider.logout().subscribe();
    this.route.navigate(['/login'])
  }
}
