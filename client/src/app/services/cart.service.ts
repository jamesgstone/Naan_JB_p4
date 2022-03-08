import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
}
// Create new cart / get cart id if already exist
// GET	http://localhost:1000/cart	Request >
// 			Response > first time
// [{
// "msg": "cart was created successfully"
// }]
// > when cart already exist
// [{
//         "id": 1
// }]

// Delete Cart
// DEL	http://localhost:1000/cart/l/delete
// 			Response >
// {
//     "msg": "cart was deleted successfully"
// }

// Cart Items

// Get all Cart Items
// GET	http://localhost:1000/cart/cartItem

// Add product to Cart
// GET	http://localhost:1000/cart/addtocart/:prodID

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




