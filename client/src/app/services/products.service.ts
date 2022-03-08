import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  static getProducts(catId: any) {
    throw new Error('Method not implemented.');
  }
  baseUrl = 'http://localhost:1000/';
  constructor(private http : HttpClient) { }

  getAllCategories() {
    return this.http.get(`${this.baseUrl}category`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  getAllProducts(catId: string) {
    return this.http.get(`${this.baseUrl}products${catId}`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  getSearchProducts(catId: string) {
    return this.http.get(`${this.baseUrl}products/search/${searchQuery}`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
