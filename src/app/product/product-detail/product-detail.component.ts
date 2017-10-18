import { Product } from './../shared/models/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'app/product/shared/services/product.service';

@Component({
    moduleId: module.id,
    templateUrl: 'product-detail.component.html',
    styleUrls: ['product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
    pageTitle = 'Product Detail';
    product: Product;

    constructor(private route: ActivatedRoute, private router: Router, private service: ProductService) {}

    ngOnInit(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        this.pageTitle += `: ${id}`

        this.service.getProductDetail(id)
            .subscribe((product: Product) => {
                this.product = product;
        });

    }

    goBack(): void {
        this.router.navigate(['/products']);
    }

}
