

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StarComponent } from './product/shared/star/star.component';
import { WelcomeComponent } from './welcome/welcome.component';

import { ConvertToSpacesPipe } from './shared/pipes/convert-to-space.pipe';

import { ProductService } from 'app/product/shared/services/product.service';

let routes = [
  { path: 'products', component: ProductListComponent },
  { path: 'products/:id', component: ProductDetailComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe,
    StarComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
