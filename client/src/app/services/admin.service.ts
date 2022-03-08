import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  baseUrl = 'http://localhost:1000/';
  constructor(private http : HttpClient) { }
//   Add new product
//   POST	http://localhost:1000/products/new
// Request >
// {
//   "prodName": "Glen Scotia 25 ",
//   "catID": 5,
//   "imgUrl": "https://www.glen-scotia-25-year-old-whisky.jpg",
//   "price": 1179
// }


// Edit product
// POST	http://localhost:1000/products/edit/:prodid
// Request > http://localhost:1000/products/edit/3
// {
//   "prodName": "Glen Scotia 25 ",
//   "catID": 5,
//   "imgUrl": "something",
//   "price": 1200
// }





}
