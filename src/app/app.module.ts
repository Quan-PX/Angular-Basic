import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { SidebarComponent, SidebarModule } from "@coreui/angular-pro";
import { IconModule, IconSetModule } from "@coreui/icons-angular";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AppHeaderComponent } from "./components/app-header/app-header.component";
import { AsideBarComponent } from "./components/aside-bar/aside-bar.component";
import { DefaultLayoutComponent } from "./components/default-layout/default-layout.component";


@NgModule({
  declarations: [
    AppComponent,
    DefaultLayoutComponent,   
    ],
  imports: [
    BrowserModule,
    // BrowserAnimationsModule, ?????
    AppRoutingModule,
    AppHeaderComponent,     
    IconModule,
    AsideBarComponent,
    SidebarComponent,
    SidebarModule    
    // RouterModule    
  ],
  providers: [IconSetModule],  
  bootstrap: [AppComponent]
})
export class AppModule { }
