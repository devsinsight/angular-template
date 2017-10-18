import { Product } from './../models/product';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { HttpErrorResponse } from '@angular/common/http';



@Injectable()
export class ProductService {
    private _productUrl = 'http://localhost:5000';

    constructor(private http: HttpClient) {}

    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(this._productUrl + '/products')
                .map( (data: any) => JSON.parse(data))
                .catch(this.handleError)
    }

    getProductDetail(id: number): Observable<Product> {

        return this.http.get<Product>(this._productUrl + '/product/' + id)
                    .map( (data: any) => JSON.parse(data))
                    .catch(this.handleError)
    }

    private handleError(err: HttpErrorResponse) {
        console.error(err.message);
        return Observable.throw(err.message);
    }

}
