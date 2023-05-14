import {Component, OnDestroy, OnInit} from '@angular/core';
import {NonNullableFormBuilder, Validators} from "@angular/forms";
import {Subscription} from "rxjs";
import {ProductService} from "../../shared/services/product.service";
import {ActivatedRoute} from "@angular/router";
import {OrderService} from "../../shared/services/order.service";
import {OrderInputType} from "../../../types/order-input.type";

@Component({
  selector: 'order-component',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})

export class OrderComponent implements OnInit, OnDestroy {

  orderError: boolean = false;
  orderInfo: boolean = false;
  orderTitle: boolean = true;
  order: boolean = true;

  private subscription: Subscription | null = null;
  private subscriptionOrder: Subscription | null = null;

  checkoutForm = this.fb.group({
    name: ['', [Validators.required, Validators.pattern('^[A-Za-zА-Яа-яЁё]+$')]],
    last_name: ['', [Validators.required, Validators.pattern('^[A-Za-zА-Яа-яЁё]+$')]],
    phone: ['', [Validators.required, Validators.pattern('^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{2}[-\s\.]?[0-9]{2,6}')]],
    country: ['', [Validators.required]],
    zip: ['', [Validators.required, Validators.minLength(6)]],
    product: [{value: '', disabled: true}],
    address: ['', [Validators.required, Validators.minLength(10)]],
    comment: [''],
  })

  constructor(private fb: NonNullableFormBuilder, private productService: ProductService, private activatedRoute: ActivatedRoute, private orderService: OrderService) {
  }

  ngOnInit() {

    this.subscription = this.activatedRoute.queryParams.subscribe((params) => {
      if (params['product']) {
        this.checkoutForm.patchValue({product: params['product']});
      }
    });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
    this.subscriptionOrder?.unsubscribe();
  }

  createOrder() {
    this.checkoutForm.markAllAsTouched();
    if (this.checkoutForm.invalid) return;
    const data: OrderInputType = this.checkoutForm.getRawValue()
    this.subscriptionOrder = this.orderService.createOrder(data)
      .subscribe(response => {
          if (response.success && !response.message) {
            this.orderInfo = true;
            this.orderTitle = false;
            this.order = false;
          } else {
            this.orderError = true;
          }
        }
      )
  }

}
