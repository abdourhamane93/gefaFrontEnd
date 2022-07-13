import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class DepenseService {
 headers = new HttpHeaders({'authorization': 'Bearer '+localStorage.getItem('token')});
  constructor(private http: HttpClient) { }

getdepenses(): Observable<any[]>{
  return this.http.get<any[]>("http://localhost:8080/api/depenses",{headers: this.headers});
}
postDepense(data){
  return this.http.post("http://localhost:8080/api/depenses/add",data,{headers:this.headers})
}
deleteDepense(url){
  let params = new HttpParams()
  .set("id",url);
  return this.http.delete("http://localhost:8080/api/depenses",{headers:this.headers,params});
  
}
  getDepenseC(id):Observable<any[]>{
    let param = new HttpParams()
    .set("idCampagne",id);
    return this.http.get<any[]>("http://localhost:8080/api/depenses/campagne",{headers:this.headers,params:param});
  }
}
