import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { JwtHelperService } from '@auth0/angular-jwt'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  jwt: string;
  userName: string;
  roles: Array<string>;

  constructor(private http: HttpClient) { }
  
  login(data){
  return this.http.post("http://localhost:8080/login",data,{observe:'response'});
  }

  saveToken(jwt: string){
    localStorage.setItem('token', jwt);
    this.jwt= jwt;
    this.parseJwt();
  }
  parseJwt(){
    let jwtHelper = new JwtHelperService();
    this.userName= jwtHelper.decodeToken(this.jwt).objt;
    this.roles = jwtHelper.decodeToken(this.jwt).roles;
  }
  isAdmin(){
    return this.roles.indexOf('Admin')>=0;  }
  isUser(){
    return this.roles.indexOf('User')>=0;
  }
  logOut(){
   localStorage.removeItem('token');
   
  }
  loadToken(){
   this.jwt= localStorage.getItem('token');
   this.parseJwt();
  }
}
