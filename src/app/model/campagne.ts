export class Campagne{
    numCampagne:number;
    campagne: string;
    objectifs: string;
    debut: Date;
    responsable: string;
    activite: any;

    constructor(numCampagne:number,camp:string,objectifs:string,debut:Date,resp:string,activite:any){
        this.numCampagne = numCampagne;
        this.campagne = camp;
        this.objectifs = objectifs;
        this.debut = debut;
        this.responsable = resp;
        this.activite = activite; 
    }
}