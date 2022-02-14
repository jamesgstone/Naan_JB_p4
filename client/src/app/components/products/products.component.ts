import { Component, OnInit } from '@angular/core';
import { productsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor( public _products:productsService) { }

  ngOnInit(): void {
    this._products.getproducts()
  }

}
