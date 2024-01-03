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
  selector: 'app-page403',
  templateUrl: './page403.component.html',
  styleUrls: ['./page404.component.scss'],
  imports: [
    ContainerComponent,
    RowComponent,
    ColComponent,
    FormModule,
    ImgModule,
    IconModule,
    ButtonModule,
  ],
  standalone: true,
})
export class Page403Component {
  icons = { cilMagnifyingGlass };
}
