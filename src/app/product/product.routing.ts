import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { ProductListComponent } from 'app/product/product-list/product-list.component';
import { ProductGuardService } from 'app/product/shared/services/product-guard.service';
import { ProductDetailComponent } from 'app/product/product-detail/product-detail.component';

let routes = [
    { path: 'products', component: ProductListComponent },
    { path: 'products/:id', canActivate: [ProductGuardService], component: ProductDetailComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductRouting { }