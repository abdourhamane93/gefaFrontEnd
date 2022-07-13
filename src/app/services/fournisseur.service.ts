import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {
  headers = new HttpHeaders({'authorization': 'Bearer '+localStorage.getItem('token')});
  constructor(private http: HttpClient) { }
  getFournisseurs(): Observable<any[]>{
   return this.http.get<any[]>('http://localhost:8080/api/fournisseurs',{headers:this.headers }); 
  }

  postFournisseur(data){
    return this.http.post("http://localhost:8080/api/fournisseurs/save",data,{headers: this.headers});
  }
 deleteFournisseur(url){
   let params = new HttpParams()
   .set('id',url);
   return this.http.delete("http://localhost:8080/api/fournisseurs/delete",{headers: this.headers,params});
 }
 getPdFr(url){
   return this.http.get(url,{headers:this.headers});
 }
}
