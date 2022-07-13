import { Component, OnInit } from '@angular/core';
import { CampagneService } from '../services/campagne.service';
import { DepenseService} from '../services/depense.service';
import { ProduitService } from '../services/produit.service';
@Component({
  selector: 'app-depenses',
  templateUrl: './depenses.component.html',
  styleUrls: ['./depenses.component.css']
})
export class DepensesComponent implements OnInit {
depenses;produits;campagnes;
clickee = false;
  constructor(private depenseService:DepenseService,
    private produitService: ProduitService,private campagneService:CampagneService) { }

  ngOnInit(): void {
    this.depenseService.getdepenses().subscribe(
      data =>{
        console.log(data);
        this.depenses = data;
        
      }
    );
    this.produitService.getProduit().subscribe(
      reponse =>{
        this.produits = reponse;
      }
    );
    this.campagneService.getCampagne().subscribe(
      data =>{
        this.campagnes = data;
        console.log(this.campagnes);
      }
    );
  }
clicke(){
  this.clickee = true;
}
annuler(){
  this.clickee = false;
}
ajouter(d){
  this.depenseService.postDepense(d).subscribe(
    reponse =>{
      console.log("ajouté")
    }
  );
}
supprimer(d){
  this.depenseService.deleteDepense(d).subscribe(
    reponse =>{console.log("supprimé")}
  );
}
}
