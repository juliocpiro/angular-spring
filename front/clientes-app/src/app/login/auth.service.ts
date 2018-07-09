import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'

@Injectable()
export class AuthService {

  private _loginUrl = "http://localhost:8080/api/login";

  constructor(
    private http : HttpClient,
    private _router : Router
  ) { }

  loginUser(user){
    return this.http.post<any>(this._loginUrl,user)
  }

  loggedIn(){
    return !!sessionStorage.getItem("token")
  }

  getToken(){
    return sessionStorage.getItem("token")
  }

  logoutUser(){
    sessionStorage.removeItem('token')
    this._router.navigate(['/login'])
  }
}
