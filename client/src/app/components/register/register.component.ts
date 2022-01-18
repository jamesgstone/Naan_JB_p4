import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/users.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(public _user:UserService) { }

  ngOnInit(): void {
  }

}
