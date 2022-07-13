export class Stock{
    quantite : number;
    dateEntree : Date;
    produit: any;

    constructor(q:number,d:Date,p: any){
        this.quantite = q;
        this.dateEntree = d;
        this.produit = p;
    }
}