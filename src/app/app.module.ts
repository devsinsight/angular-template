import { EmployeeService } from './employee/shared/services/employee.service';
import { EmployeeModule } from './employee/employee.module';
import { ProductModule } from './product/product.module';
import { ProductGuardService } from './product/shared/services/product-guard.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, CanActivate } from '@angular/router';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppRouting } from 'app/app.routing';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ProductModule,
    EmployeeModule,
    AppRouting
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
