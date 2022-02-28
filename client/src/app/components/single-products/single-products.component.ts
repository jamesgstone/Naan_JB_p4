import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-products',
  templateUrl: './single-products.component.html',
  styleUrls: ['./single-products.component.scss']
})
export class SingleProductsComponent implements OnInit {
  @Input()
  product!: {
    prodName: string;
    productCategory: string;
    imgUrl: string;
    price: number;
  };

  constructor() { }

  ngOnInit(): void {
  }


}
