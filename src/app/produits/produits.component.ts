import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../services/produit.service';
import { FournisseurService } from '../services/fournisseur.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  produits;
  ajoute = false;fournisseurs;
  constructor(private produitService: ProduitService,private fournisseurService: FournisseurService) { }

  ngOnInit(): void {
    this.produitService.getProduit().subscribe(
      data =>{
        this.produits = data;
        console.log(this.produits);
      }
    );
    this.fournisseurService.getFournisseurs().subscribe(
        reponse =>{this.fournisseurs = reponse}
      );
  }
  clicke(){
    this.ajoute = true;
  }
  annuler(){this.ajoute = false;}
  ajouter(produit){
    this.produitService.postProduit(produit).subscribe(
      reponse =>{
        this.ajoute = false;
        this.ngOnInit();
      }
    );
  }
  supprimer(p){
    let c = confirm("êtes-vous sûr de vouloir supprimer?");
    if(!c) return;
    this.produitService.deleteProduit(p.numProduit).subscribe(
      reponse =>{
        this.ngOnInit();
      }
    );

  }
}
