import { Injectable, NgModule } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterModule,
  RouterStateSnapshot,
  Routes
} from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { UserDetailComponent } from './user-detail.component';
import { UserUpdateComponent } from './user-update.component';
import { UserComponent } from './user.component';

// @Injectable({providedIn: 'root'})
// export class UserResolve implements Resolve<any> {
//   resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
//     throw new Error('Method not implemented.');
//   }

// }

@Injectable({providedIn: 'root'})
export class UserResolveService {  
  constructor(private userService: UserService){}
  
}

export const userResolve: ResolveFn<any> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  return 
};

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Quản lý Người dùng',
    },
    children: [
      {
        path: '',
        component: UserComponent,
        data: {
          title: 'Danh sách Người dùng',
        },
      },
      {
        path: '',
        redirectTo: '',
        pathMatch: 'full',
      },
      {
        path: ':id/update',
        component: UserUpdateComponent,
        data: {
          title: 'Chỉnh sửa người dùng',
        },
      },
      {
        path: 'new',
        component: UserUpdateComponent,
        data: {
          title: 'Tạo mới người dùng',
        },
      },
      {
        path: 'detail',
        component: UserDetailComponent,
        data: {
          title: 'Thông tin chi tiết người dùng',
        },
      },
      // {
      //     path: ':id/detail',
      //     component: CustomersDetailComponent,
      //     // resolve: {
      //     //     customers: CustomersResolve
      //     // },
      //     data: {
      //         title: 'Chi tiết khách hàng'
      //     }
      // }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
