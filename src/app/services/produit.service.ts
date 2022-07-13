import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
 headers = new HttpHeaders({'authorization': 'Bearer '+localStorage.getItem('token')});
  constructor(private http: HttpClient) { }
  getProduit(): Observable<any[]>{
    return this.http.get<any[]>('http://localhost:8080/api/produits',{headers:this.headers });
  }
  postProduit(p){
    return this.http.post("http://localhost:8080/api/produits/save",p,{headers: this.headers});
  }
  deleteProduit(url){
    let params = new HttpParams()
    .set('id',url);
    return this.http.delete("http://localhost:8080/api/produits/delete",{headers:this.headers,params});
  }

  getProduits(data){
    return this.http.get(data,{headers: this.headers});
  }
}
 