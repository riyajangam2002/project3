import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
// import { AngularMaterial } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//  import {  MaterialModule } from './material.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
// import {OrderComponent } from './order/order.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table'








@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SideMenuComponent,
    DashboardComponent
    
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // AngularMaterial,
    MaterialModule,
    BrowserAnimationsModule,
    MatSortModule,
    MatTableModule,
    HttpClientModule
    
  ],
  
      

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
