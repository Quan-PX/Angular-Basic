import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import {
  AvatarModule,
  ButtonModule,
  CardModule,
  ColComponent,
  FormModule,
  RowComponent,
  SharedModule,
  SmartTableModule
} from '@coreui/angular-pro';
import { IconModule } from '@coreui/icons-angular';
import { UserDetailComponent } from './user-detail.component';
import { UsersRoutingModule } from './user-routing,module';
import { UserUpdateComponent } from './user-update.component';
import { UserComponent } from './user.component';

@NgModule({
  imports: [
    UsersRoutingModule,
    RowComponent,
    ColComponent,
    IconModule,
    ButtonModule,
    CardModule,
    SmartTableModule,
    AvatarModule,
    FormModule,
    SharedModule,
    CommonModule,
    RouterLink,
    ReactiveFormsModule
  ],
  declarations: [UserComponent, UserUpdateComponent, UserDetailComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class UsersModule {}
