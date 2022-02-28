import { Component, OnInit } from '@angular/core';
import { Category } from '../../interfaces/category';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-categories-bar',
  templateUrl: './categories-bar.component.html',
  styleUrls: ['./categories-bar.component.scss']
})
export class CategoriesBarComponent implements OnInit {
  category: Category[] = [];
  success: string | undefined;
  error: any;
  constructor(private productService:ProductsService) { }

  ngOnInit() {
    this.getCategory();
  }
  getCategory(): void {
    this.productService
    .getAllCategories()
    .subscribe(
      (data: Category[]) => {
        this.category = data
        this.success = 'Operation success'
      },
      (err) => {
        console.log(err)
        this.error = err.message;
      }
    );
  }

}
