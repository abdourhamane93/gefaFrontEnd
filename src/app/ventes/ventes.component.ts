import { Component, OnInit } from '@angular/core';
import { VentesService } from '../services/ventes.service';
import { ProduitService } from '../services/produit.service';
import { LigneVente } from '../model/ligneVente';
import { Vente } from '../model/vente';
import { CampagneService } from '../services/campagne.service';

@Component({
  selector: 'app-ventes',
  templateUrl: './ventes.component.html',
  styleUrls: ['./ventes.component.css']
})
export class VentesComponent implements OnInit {
  ventes;produits;vente;prod;montant;vte;numV:number;campagnes;
  constructor(private ventesService: VentesService,
    private produitService:ProduitService,
    private campagneService:CampagneService) { }

  ngOnInit(): void {
    this.ventesService.getVentes().subscribe(
      reponse =>{ 
        this.ventes = reponse 
        console.log(this.ventes);
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
      }
    );
  }

ajouter(v){
  
  this.ventesService.postVente(v).subscribe(
    reponse => {
      this.vte = reponse;
      this.ngOnInit();
    }
      );
      this.ngOnInit();
}
}
