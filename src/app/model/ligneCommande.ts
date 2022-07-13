import { Commande } from "./Commande";

export class ligneCommande{
id: any;
 commande : any;
 produit: any;
 prix: string;
 quantite: number;

 constructor(i:any,c:any,p:any,px:string,q:number){
     this.id = i;
     this.commande = c;
     this.produit= p;
     this.prix = px;
     this.quantite= q;
 }
} 