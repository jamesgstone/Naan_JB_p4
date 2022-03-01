import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
searchWord ='';
isSearching = false;


  constructor() { }

  ngOnInit(): void {
  }

search() {
  this.isSearching = true


}

}
