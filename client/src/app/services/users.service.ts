import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginFormInterface } from '../models/login-form.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public _router:Router) { }

  user = {
      username:"", 
      role:""
  }

  async login(body:LoginFormInterface){
    try {
        const res = await fetch('http://localhost:1000/users/login',{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(body),
            credentials:"include"
        })

        const data = await res.json()

        if (!data.err) {
            this.user.username = data.username
            this.user.role = data.role
            this._router.navigateByUrl("/shows")
        }else{
            alert(data.msg)
        }

    } catch (err) {
        console.log(err)
    }
  }

  async register(body:LoginFormInterface){
    try {
        const res = await fetch('http://localhost:1000/users/register',{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(body),
            credentials:"include"
        })

        const data = await res.json()

        if (!data.err) {
            this._router.navigateByUrl("/login")
        }else{
            alert(data.msg)
        }

    } catch (err) {
        console.log(err)
    }
  }

  async logout(){
    const res = await fetch('http://localhost:1000/users/logout',{
        method:"DELETE",
        credentials:"include"
    })
    const data = await res.json()
    this._router.navigateByUrl('/login')
  }

}
