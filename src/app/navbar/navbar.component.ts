import { Component, OnInit ,Inject} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import {NavbarService} from '../navbar.service'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document , private _nav:NavbarService ) { }

  ngOnInit(): void {
    this._nav.topMainNavBar().then((res) => {
      res.subscribe(response => {
        console.log(response);
        
      })
    })
  }

}
