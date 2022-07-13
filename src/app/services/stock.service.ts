import { Injectable } from '@angular/core';
import {HttpHeaders, HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  headers = new HttpHeaders({'authorization': 'Bearer '+localStorage.getItem('token')});
  constructor(private http: HttpClient) { }

  getStock(): Observable<any[]>{
    return this.http.get<any[]>("http://localhost:8080/api/stocks",{headers: this.headers}); 
  }
  postStock(data){
    return this.http.post("http://localhost:9096/stocks",data,{headers:this.headers});}
    deleteStock(url){
      return this.http.delete(url,{headers:this.headers});
    }
  getProduitStock(link){
    return this.http.get(link,{headers:this.headers});
  }
  modif(id,q){
    return this.http.patch("http://localhost:9096/stock/"+id+"/"+q,q,{headers:this.headers});
  }
  getStockByP(n){
    return this.http.get("http://localhost:9096/stock/"+n,{headers:this.headers});
  }
  getStocks(): Observable<any[]>{
    return this.http.get<any[]>("http://localhost:9096/stock",{headers:this.headers})
  }
  }
