import { Component } from '@angular/core';
import {
  ButtonModule,
  CardModule,
  ContainerComponent,
  FormModule,
} from '@coreui/angular-pro';
import { cilEnvelopeOpen, cilLockLocked, cilUser } from '@coreui/icons';
import { IconModule } from '@coreui/icons-angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  imports: [
    CardModule,
    FormModule,
    ButtonModule,
    IconModule,
    ContainerComponent,
  ],
  standalone: true,
})
export class RegisterComponent {
  icons = { cilUser, cilLockLocked, cilEnvelopeOpen };
}
