import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class VentesService {

  constructor(private http: HttpClient) { }
  headers = new HttpHeaders({'authorization': 'Bearer '+localStorage.getItem('token')});
  getVentes():Observable<any[]>{
    
    return this.http.get<any[]>("http://localhost:8080/api/ventes",{headers: this.headers});
  }
  postVente(data){
    return this.http.post("http://localhost:8080/api/ventes/save",data,{headers:this.headers});
  }
  postLigneVente(lv){
    return this.http.post("http://localhost:9096/ligneVentes",lv,{headers:this.headers});
  }
  getVenteByNum(numV){
    return this.http.get("http://localhost:9096/ventes/"+numV,{headers:this.headers});
  }
  getVentesCamp(id):Observable<any[]>{
    let param = new HttpParams()
    .set("idCampagne",id);
    return this.http.get<any[]>("http://localhost:8080/api/ventes/campagne",{headers:this.headers,params:param});
  }
}
