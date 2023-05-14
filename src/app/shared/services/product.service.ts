import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductType} from "../../../types/product.type";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: ProductType[] = [];

  constructor(private http: HttpClient) {
  }


  getProducts(): Observable<ProductType[]> {
    return this.http.get<ProductType[]>(environment.apiUrl + 'tea');
  }

  getProduct(id: number): Observable<ProductType> {
    return this.http.get<ProductType>(environment.apiUrl + `tea?id=${id}`);
  }

}
