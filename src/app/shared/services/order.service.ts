import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductType} from "../../../types/product.type";
import {OrderInputType} from "../../../types/order-input.type";
import {OrderResponseType} from "../../../types/order-response.type";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  products: ProductType[] = [];

  constructor(private http: HttpClient) { }

  createOrder(data: OrderInputType) {
    return this.http.post<OrderResponseType>(environment.apiUrl + `order-tea`, data);
  }

}
