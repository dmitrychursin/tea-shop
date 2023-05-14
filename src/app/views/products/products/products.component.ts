import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductType} from "../../../../types/product.type";
import {Subscription, tap} from "rxjs";
import {ProductService} from "../../../shared/services/product.service";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'products-component',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy{

  products: ProductType[] = [];

  loading: boolean = false;
  private subscriptionProductService: Subscription | null = null;

  constructor(private productService: ProductService, private http: HttpClient, private router: Router) {
  }

  ngOnInit() {
    this.loading = true;
    this.subscriptionProductService = this.productService.getProducts()
      .pipe(
        tap(() => {
          this.loading = false;
        })
      )
      .subscribe(
        {
          next: (data) => {
            this.products = data;
          },
          error: (error) => {
            console.log(error);
            this.router.navigate(['/']);
          }
        }
      )
  }

  ngOnDestroy() {
    this.subscriptionProductService?.unsubscribe();
  }

}
