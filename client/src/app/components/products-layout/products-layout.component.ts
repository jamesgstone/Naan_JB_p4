import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-layout',
  templateUrl: './products-layout.component.html',
  styleUrls: ['./products-layout.component.scss'],
})
export class ProductsLayoutComponent implements OnInit {
  products: Product[] = [];
  success: string | undefined;
  error: any;
  catId =''
  constructor(private productService: ProductsService) {}

  ngOnInit() {
    this.getProducts(this.catId);
  }
  getProducts(catId: string): void {
    this.productService.getAllProducts(catId).subscribe(
      (data: Product[]) => {
        this.products = data;
        this.success = 'Operation success';
      },
      (err) => {
        console.log(err);
        this.error = err.message;
      }
    );
  }
}
