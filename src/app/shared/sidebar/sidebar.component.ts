import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.loginService.loadToken();
  }
  logout(){
    this.loginService.logOut();
    this.router.navigate(['']);
  }
  isAdmin(){
    return this.loginService.isAdmin();
  }
  isUser(){
    return this.loginService.isUser();
  }
}
