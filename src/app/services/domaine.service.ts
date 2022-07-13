import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DomaineService {
  headers = new HttpHeaders({'authorization': 'Bearer '+localStorage.getItem('token')});
  constructor(private http: HttpClient) { }
  getDomaines(): Observable<any[]>{
    console.log(this.headers);
    return this.http.get<any[]>("http://localhost:8080/api/domaines",{headers:this.headers});
  } 
  getActivites(url){
    return this.http.get(url,{headers:this.headers});
  }

  deleteActivite(url){
    return this.http.delete(url,{headers: this.headers})
  }
  getFournisseurs(url){
    return this.http.get(url,{headers:this.headers});
  }
  postDomaine(d){
    return this.http.post("http://localhost:8080/api/domaines/save",d,{headers:this.headers}); 
  }
  getDomaineById(id){
    let param = new HttpParams()
    .set('id', id);
    return this.http.get("http://localhost:8080/api/domaine",{headers:this.headers,params:param});
  }
}
