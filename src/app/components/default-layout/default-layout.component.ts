import { Component } from '@angular/core';
import { INavData } from '@coreui/angular-pro';
import { StatusService } from 'src/app/services/SidebarSevice/sidebar.service';
import { navItems } from 'src/app/shared/ISidebar';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss'],
  providers: [StatusService]
})
export class DefaultLayoutComponent {
  currentStateVisible: boolean = true  
  navItems: INavData[] = navItems;

  constructor(private statusService: StatusService){}

  // ngOnInit() {
  //   this.statusService.getStatus().subscribe((newStatus) => {
  //     this.currentStateVisible = newStatus;
  //   });
  // }

  // receiveVisibleStatus(event:boolean) {
  //   this.statusService.setStatus
  // }

  receiveVisibleStatus(status: boolean)  {
    this.currentStateVisible = status
  }
}
