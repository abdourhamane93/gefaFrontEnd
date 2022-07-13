export class Commande {
private id: number;
private fournisseur:any;
private campagne:any;
private dateCommande: Date;
private designation:string;
private montant:number;
private produit:any;

constructor(id:number,fr:any,cp:any,dte:Date,dtion:string,mt:number,produit:any) {
        this.id= id;
        this.fournisseur=fr;
        this.campagne=cp;
        this.dateCommande = dte;
        this.designation = dtion;
        this.montant = mt;
        this.produit = produit;
    } 
}
