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

//  addLogin(person:Person): Observable<any> {
//   const headers = { 'content-type': 'application/json'}
//   const body=JSON.stringify(person);
//   console.log(body)
//   return this.http.post(this.baseURL + 'people', body,{'headers':headers})
// }

store(login: Login) {
  return this.http.post(`${this.baseUrl}users/login`, { data: login }).pipe(
    map((res: any) => {
      return res['data'];
    })
  );
}

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
logOut() {
return this.http.delete(`${this.baseUrl}logout`)
.subscribe({
    next: data => {
        this.status = 'Delete successful';
    },
    error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', error);
    }
});
}





}
