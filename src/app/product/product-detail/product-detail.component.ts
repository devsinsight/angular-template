import { Product } from './../shared/models/product';
import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: 'product-detail.component.html',
    styleUrls: ['product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
    pageTitle: string = 'Product Detail';
    product: Product;

    constructor(){}

    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }

}
