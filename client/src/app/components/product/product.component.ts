import { Component, Input, OnInit } from '@angular/core';
import { productInterface } from 'src/app/models/product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor() { }

  @Input()
  product:productInterface|undefined

  ngOnInit(): void {
  }

}
