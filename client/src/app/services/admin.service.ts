import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor() { }

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








}
