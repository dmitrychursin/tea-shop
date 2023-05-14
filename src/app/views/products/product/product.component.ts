import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductType} from "../../../../types/product.type";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../../shared/services/product.service";
import {Subscription, tap} from "rxjs";

@Component({
  selector: 'product-component',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {

  product: ProductType;
  loading: boolean = false;
  private subscriptionActivatedRoute: Subscription | null = null;

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService, private router: Router) {
    this.product = {
      id: 0,
      image: "",
      title: "",
      price: 0,
      description: "",
    }
  }

  ngOnInit() {
    this.subscriptionActivatedRoute = this.activatedRoute.params.subscribe((params) => {
      this.loading = true;
      if (params['id']) {
        this.productService.getProduct(+params['id'])
          .pipe(
            tap(() => {
              this.loading = false;
            })
          )
          .subscribe({
            next: (data) => {
              this.product = data;
            },
            error: (error) => {
              console.log(error);
              this.router.navigate(['/']);
            }
          });
      }
    });
  }

  ngOnDestroy() {
    this.subscriptionActivatedRoute?.unsubscribe();
  }

}
