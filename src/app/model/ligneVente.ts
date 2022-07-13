import { Vente } from "./vente";

export class LigneVente{
    id: number;
    vente: Vente;
    produit: any;
    prix:number;
    quantite:number;
    constructor(i:number,vente:Vente,produit:any,prix:number,quantite:number){
        this.id = i;
        this.vente = vente;
        this.produit = produit;
        this.prix = prix;
        this.quantite = quantite;
    }
}
