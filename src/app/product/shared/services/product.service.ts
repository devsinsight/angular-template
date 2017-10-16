import { Product } from './../models/product';
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { HttpErrorResponse } from '@angular/common/http';



@Injectable()
export class ProductService {
    private _productUrl = 'assets/api/products.json';


    constructor(private http: HttpClient){}

    getProducts(): Observable<Product[]>{
        return this.http.get<Product[]>(this._productUrl)
                .catch(this.handleError)
    }

    private handleError(err: HttpErrorResponse) {
        console.error(err.message);
        return Observable.throw(err.message);
    }

    /*getProducts(): Product[] {
        return [
            new Product(1, 'Garden Cart', 'GDN-0023', 'October 15, 2017', '15 gallon capacity rolling', 32.99, 4.2, 'https://openclipart.org/image/50px/svg_to_png/58471/garden-cart.png&disposition=attachment'),
            new Product(2, 'Hammer', 'TBX-0048', 'October 15, 2017', 'Curved claw steel hammer', 9.8, 4.8, 'https://openclipart.org/image/50px/svg_to_png/73/rejon-Hammer.png&disposition=attachment')
        ];
    }
    */
}