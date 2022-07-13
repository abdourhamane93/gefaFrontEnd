import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActiviteService {
  headers = new HttpHeaders({'authorization': 'Bearer '+localStorage.getItem('token')});
  constructor(private http: HttpClient) { }
  getActivite(): Observable<any[]>{
    return this.http.get<any[]>("http://localhost:8080/api/activites",{headers:this.headers});
  }
  postActivite(a){
    return this.http.post("http://localhost:8080/api/activites/save",a,{headers:this.headers});
  }

  getActiviteD(id): Observable<any[]>{
    let param = new HttpParams()
    .set('idDomaine', id);
    return this.http.get<any[]>("http://localhost:8080/api/activite",{headers:this.headers,params:param});
  }
  
  deleteActivite(id){
    let params = new HttpParams()
    .set('id',id)
    return this.http.delete("http://localhost:8080/api/activite/delete",{headers:this.headers,params:params});
  }
}


