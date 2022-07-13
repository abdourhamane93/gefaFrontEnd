import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CampagneService {
  headers = new HttpHeaders({'authorization': 'Bearer '+localStorage.getItem('token')});
  constructor(private http : HttpClient) { }

  getCampagne():Observable<any[]>{
    return this.http.get<any[]>("http://localhost:8080/api/campagnes",{headers:this.headers});
  }
  postCampagne(c){
    return this.http.post("http://localhost:8080/api/campagnes/save",c,{headers:this.headers});
  }

  getCampagnes(id):Observable<any[]>{
    let param = new HttpParams()
    .set('idA',id);
    return this.http.get<any[]>("http://localhost:8080/api/campagne",{headers:this.headers,params:param});
  }
}
