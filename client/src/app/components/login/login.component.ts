import { Component, OnInit } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';

//models
import { LoginForm } from '../../models/login-form'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formData:LoginForm = {
		email: '',
		password: ''
	}
  constructor() { }

  ngOnInit(): void {
  }

}
