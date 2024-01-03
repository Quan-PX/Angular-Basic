import { Component } from '@angular/core';
import {
  ButtonModule,
  ColComponent,
  ContainerComponent,
  FormModule,
  ImgModule,
  RowComponent,
} from '@coreui/angular-pro';
import { cilMagnifyingGlass } from '@coreui/icons';
import { IconModule } from '@coreui/icons-angular';

@Component({
  selector: 'app-page500',
  templateUrl: './page500.component.html',
  styleUrls: ['./page404.component.scss'],
  standalone: true,
  imports: [
    ContainerComponent,
    RowComponent,
    ColComponent,
    FormModule,
    ImgModule,
    IconModule,
    ButtonModule,
  ],
})
export class Page500Component {
  icons = { cilMagnifyingGlass };
}
