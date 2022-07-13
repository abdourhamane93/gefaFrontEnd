export class Vente {
   numVente: number;
   dateVente: Date;
   montant: number;
   
    constructor(id:number,dateV:Date,mt:number){
        this.numVente = id;
        this.dateVente = dateV;
        this.montant = mt;
   }
}
