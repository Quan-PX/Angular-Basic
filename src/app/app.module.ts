import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent, SidebarModule } from '@coreui/angular-pro';
import { IconModule, IconSetModule } from '@coreui/icons-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AsideBarComponent } from './components/aside-bar/aside-bar.component';
import { DefaultLayoutComponent } from './components/default-layout/default-layout.component';
import { ExpiredToken } from './components/interceptor/expired-token.interceptor';
import { TokenInterceptor } from './components/interceptor/token.interceptor';

@NgModule({
  declarations: [AppComponent, DefaultLayoutComponent],
  imports: [
    BrowserModule,
    // BrowserAnimationsModule, //?????
    BrowserAnimationsModule ,
    AppRoutingModule,
    AppHeaderComponent,
    IconModule,
    AsideBarComponent,
    SidebarComponent,
    SidebarModule,
    ReactiveFormsModule,
    HttpClientModule,
    // RouterModule
  ],
  providers: [
    IconSetModule,
    HttpClientModule,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ExpiredToken,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
