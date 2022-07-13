import { Component, OnInit } from '@angular/core';
import { EmployeService } from '../services/employe.service';
import { Response } from 'selenium-webdriver/http';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent implements OnInit {
  employes;employe;
  clickee
  constructor(private employeService: EmployeService) { }

  ngOnInit(): void {
    this.employeService.getEmployes().subscribe(
      data =>{
        this.employes = data;
      }
    );
  }
  clicke(){
    this.clickee = true;
  }
  annuler(){
    this.clickee = false;
  }
  ajouter(data){
    this.employeService.postEmploye(data).subscribe(
      reponse =>{
        this.employe = reponse;
        this.ngOnInit();
      }
    );
  }
}
