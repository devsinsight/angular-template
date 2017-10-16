import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/models/product';
import { ProductService } from 'app/product/shared/services/product.service';

@Component({
    moduleId: module.id,
    selector: 'products',
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.scss']
})
export class ProductListComponent implements OnInit {

    pageTitle: string = "Product List";
    showImage: boolean = false;
    

    _listFilter:string;

    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    products: Product[];
    filteredProducts: Product[] = [];
    errorMessage: string;

    constructor(private service: ProductService){}

    ngOnInit(): void {
        this.products = [];
        this.service.getProducts().subscribe(
            products => { 
                this.products = products; 
                this.filteredProducts = this.products; 
            },
            error => this.errorMessage = <any>error
        )
        
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    performFilter(filterBy: string): Product[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: Product) =>
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1)
    }

    onNotify(event){
        console.log(event)
    }
}
