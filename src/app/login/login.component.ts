import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  erreur = false;
  constructor(private loginService: LoginService, private router: Router) { }
  
  ngOnInit(): void {
  }

login(data){
    this.loginService.login(data).subscribe(
     reponse =>{
     let jwt = reponse.headers.get('authorization');
     this.loginService.saveToken(jwt);
     this.router.navigate(['domaine']);
     },
    error=>{
        this.erreur=true;
        setTimeout(() => {
          this.erreur = false;
        }, 5000);
    }
   );
  }
 
}

