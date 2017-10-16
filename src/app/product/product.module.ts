import { ProductService } from 'app/product/shared/services/product.service';
import { RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { ProductListComponent } from 'app/product/product-list/product-list.component';
import { ProductDetailComponent } from 'app/product/product-detail/product-detail.component';
import { ProductGuardService } from 'app/product/shared/services/product-guard.service';
import { ConvertToSpacesPipe } from 'app/product/shared/pipes/convert-to-space.pipe';
import { SharedModule } from 'app/shared/shared.module';
import { ProductRouting } from 'app/product/product.routing';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe
  ],
  imports: [
    SharedModule,
    ProductRouting
  ],
  providers: [
    ProductService,
    ProductGuardService
  ]
})
export class ProductModule { }
