import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class EmployeService {
 headers = new HttpHeaders({'authorization': 'Bearer '+localStorage.getItem('token')});
  constructor(private http: HttpClient) { }

  getEmployes(): Observable<any[]>{
    return this.http.get<any[]>("http://localhost:8080/api/employes",{headers: this.headers});
  }
  postEmploye(data){
    return this.http.post("http://localhost:8080/api/employes/add",data,{headers:this.headers})
  }
}
