import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  baseUrl = 'http://localhost:1000/';
  constructor(private http : HttpClient) { }

  getAllCategories() {
    return this.http.get(`${this.baseUrl}category`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  getAllProducts() {
    return this.http.get(`${this.baseUrl}products`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
