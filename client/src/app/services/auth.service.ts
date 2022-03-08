import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = 'http://localhost:1000/';
  constructor(private http : HttpClient) { }


//   login
//   POST  http://localhost:1000/users/login
//   Request >
// {
//   "email": "user1@g.com",
//   "password": "123"
// }
// 			Response >
// {
//  "msg": "you logged in successfully",
//  "id": 1111,
//  "email": "user1@g.com",
//  "role": "User",
//  "firstname": "Jim",
//  "lastname": "Murray"
// }


// Register
// POST	http://localhost:1000/users/register
// Request >
// {
//   "id": 7777,
//   "firstname": "john",
//   "lastname": "smith",
//   "email": "smith@g.com",
//   "password": "123",
//   "city": "new york",
//   "street": "34th street"
// }
// 			Response >
// {
//     "msg": "user added successfully"
// }

// Check if ID exist in DB
//   If no ID in DB -> false
//   If ID already in DB -> true
getCheckId(userid: string) {
  return this.http.get(`${this.baseUrl}users/${userid}`).pipe(
    map((res: any) => {
      return res;
    })
  );
}

// logout
// DEL	http://localhost:1000/users/logout
// 			Response >
// {
//     "msg": "disconnected successfully"
// }





}
