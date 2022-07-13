import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  headers = new HttpHeaders({'authorization': 'Bearer '+localStorage.getItem('token')});
  constructor(private http: HttpClient) { }

  getCommandes(): Observable<any[]>{
    return this.http.get<any[]>("http://localhost:8080/api/appros",{headers:this.headers}); 
    }
  postCommande(data){
    return this.http.post("http://localhost:8080/api/appros/save",data,{headers: this.headers});
  }
  supprimerCde(c){
    return this.http.delete(c,{headers:this.headers});
  }
  getFournisseurs(data){
    return this.http.get(data,{headers:this.headers});
  }
  postLigneCde(lc){
    return this.http.post("http://localhost:9096/ligneCommandes",lc,{headers:this.headers});
  }
  getCde(num){
    return this.http.get("http://localhost:9096/commande/num");
  }
  modif(a){
    return this.http.put("http://localhost:8080/api/appro/update",a,{headers:this.headers});
  }
}


