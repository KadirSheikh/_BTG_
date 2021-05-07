import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  constructor(private _http:HttpClient) { }

  async topMainNavBar() {

    return await this._http.get("https://btg-app.herokuapp.com/api/navbar");

  }
}

