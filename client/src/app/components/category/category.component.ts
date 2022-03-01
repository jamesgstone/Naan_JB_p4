import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  @Input() category!: {
    id: number;
    categoryName: string;
  };

  constructor() { }

  ngOnInit(): void {
  }
changeCategory(catId: any) {
console.log(catId)
ProductsService.getProducts(catId)
}
}
