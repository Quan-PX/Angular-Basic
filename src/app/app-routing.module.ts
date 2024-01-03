import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from './components/default-layout/default-layout.component';
import { Page403Component } from './components/errorPage/page403.component';
import { Page404Component } from './components/errorPage/page404.component';
import { Page500Component } from './components/errorPage/page500.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {
        path: 'user',
        loadChildren: () =>
          import('./components/Users/user.module').then((m) => m.UsersModule),
      },
      {
        path: 'category',
        loadChildren: () =>
          import('./components/category/category.module').then(
            (m) => m.CategoryModule
          ),
      },
      {
        path: 'product',
        loadChildren: () =>
          import('./components/product/product.module').then(
            (m) => m.ProductModule
          ),
      }, 
      // {
      //   path: 'login',
      //   loadChildren: () =>
      //     import('./components/login/login.component').then(
      //       (m) => m.LoginComponent
      //     ),
      // },           
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Đăng nhập'
  },
  {
    path: 'register',
    component: RegisterComponent,
    title: 'Đăng ký'
  },
  {
    path: '404',
    component: Page404Component,
    title: 'Page 404'
  },
  {
    path: '403',
    component: Page403Component,
    title: 'Page 403'
  },
  {
    path: '500',
    component: Page500Component,
    title: 'Page 500'
  },
  {
    path: '**',
    redirectTo: '/404'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
