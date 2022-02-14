import { Injectable } from '@angular/core';
import { productInterface } from '../models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class productsService {

  constructor() { }

  productsArr:productInterface[] = []

  async getproducts(){
    const res = await fetch('http://localhost:1000/products')

    const data = await res.json()
    console.log(data)
    this.productsArr = data
  }
}
