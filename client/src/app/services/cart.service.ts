import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  baseUrl = 'http://localhost:1000/';
  constructor(private http: HttpClient) {}

  // Create new cart / get cart id if already exist
  // first time - "msg": "cart was created successfully"
  // > when cart already exist - "id": 1
  getCart() {
    return this.http.get(`${this.baseUrl}cart`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  // Delete Cart
  // DEL	http://localhost:1000/cart/l/delete
  // 			Response >
  // {
  //     "msg": "cart was deleted successfully"
  // }

  // Cart Items

  // Get all Cart Items
  getCartItems() {
    return this.http.get(`${this.baseUrl}cart/cartItem`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  // Add product to Cart
  // GET	http://localhost:1000/cart/addtocart/:prodID
  getAddProductToCart(prodID: string) {
    return this.http.get(`${this.baseUrl}products/search/${prodID}`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  // Delete Item from cart
  // DEL	http://localhost:1000/cart/deletefromcart/:prodID
  // Request > http://localhost:1000/cart/deletefromcart/1
  // Response >
  // {
  // If no such item exists in cart
  // "msg": "No Such product in cart"
  // If more than one item exists in cart
  // "msg": "one product deleted successfully"
  // If only one item exists in cart
  // "msg": "product Deleted from cart"
  // }
}
