import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { INavData, SidebarModule } from '@coreui/angular-pro';
import { navItems } from 'src/app/shared/ISidebar';

@Component({
  selector: 'app-aside-bar',
  templateUrl: './aside-bar.component.html',
  styleUrls: ['./aside-bar.component.scss'],
  standalone: true,
  imports: [
    // MatButtonModule,
    // MatSidenavModule,
    // MatMenuModule,
    // MatToolbarModule,
    // MatIconModule,
    // MatListModule,
    // MatExpansionModule,
    // MatTooltipModule,
    RouterModule,
    SidebarModule
  ]
})
export class AsideBarComponent {
  @Input() currentStateVisible: boolean = false; 
  navItems: INavData[] = navItems;
}
