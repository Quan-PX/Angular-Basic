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
// import img from '../../../assets/images/404.png';

@Component({
  selector: 'app-page404',
  templateUrl: './page404.component.html',
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
export class Page404Component {
  icons = { cilMagnifyingGlass };
  // notFoundImg: string = img
  // imgname= require("../../../assets/images/404.png");
}
