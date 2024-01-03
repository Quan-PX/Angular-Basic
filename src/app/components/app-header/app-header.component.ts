import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule, ContainerComponent, DropdownComponent, HeaderModule, NavModule } from '@coreui/angular-pro';
import { cilBell, cilHome, cilList, cilUser } from '@coreui/icons';
import { IconModule } from '@coreui/icons-angular';

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
    ButtonModule
  ],
})
export class AppHeaderComponent {
  icons = { cilList, cilUser, cilHome, cilBell };
  @Output() visibleSideBar = new EventEmitter<boolean>();
  stateVisibale: boolean = true

  // constructor(private statusService: StatusService){}

  handleToggleStatus() {
    this.stateVisibale = !this.stateVisibale
    this.visibleSideBar.emit(this.stateVisibale)
  }
  
}
