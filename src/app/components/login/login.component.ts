import { Component } from '@angular/core';
import { ButtonModule, CardModule, FormModule, TooltipModule } from '@coreui/angular-pro';
import { cilCommentBubble, cilLockLocked, cilUser } from '@coreui/icons';
import { IconModule } from '@coreui/icons-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [CardModule, FormModule, ButtonModule, IconModule, TooltipModule],
  standalone: true,
})
export class LoginComponent {
  icons = {cilUser, cilLockLocked,cilCommentBubble}
}
