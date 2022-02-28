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
  constructor(private productService: ProductsService) {}

  ngOnInit() {
    this.getProducts();
  }
  getProducts(): void {
    this.productService.getAllProducts().subscribe(
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
