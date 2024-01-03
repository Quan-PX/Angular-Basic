import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailComponent } from './user-detail.component';
import { UserUpdateComponent } from './user-update.component';
import { UserComponent } from './user.component';

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
  // {
  //     path: '/update',
  //     // component: User
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
