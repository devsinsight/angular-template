import { Product } from './../shared/models/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    moduleId: module.id,
    templateUrl: 'product-detail.component.html',
    styleUrls: ['product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
    pageTitle: string = 'Product Detail';
    product: Product;

    constructor(private route: ActivatedRoute, private router: Router){}

    ngOnInit(): void {
        let id = +this.route.snapshot.paramMap.get('id');
        this.pageTitle += `: ${id}`
        this.product = new Product(id,"Leaf Rake","GDN-0011","March 19, 2016","Leaf rake with 48-inch wooden handle.", 19.95,3.2,"https://openclipart.org/image/50px/svg_to_png/26215/Anonymous_Leaf_Rake.png&disposition=attachment")
    }

    goBack(): void {
        this.router.navigate(['/products']);
    }

}
