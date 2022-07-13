import { Component, OnInit } from '@angular/core';
import { FournisseurService } from '../services/fournisseur.service';
import { Router } from '@angular/router'
import { ProduitService } from '../services/produit.service';


@Component({
  selector: 'app-fournisseurs',
  templateUrl: './fournisseurs.component.html',
  styleUrls: ['./fournisseurs.component.css']
})
export class FournisseursComponent implements OnInit {

  constructor(private fournisseurService: FournisseurService,private router: Router,
  private produitService: ProduitService) { }
  fournisseurs;
  produits;

  clicke = false; clikee=false;
  ngOnInit(): void {
    this.fournisseurService.getFournisseurs().subscribe(
      data =>{
        this.fournisseurs = data;
        console.log(this.fournisseurs);
      },error =>{ console.log(error)}
    );
    this.produitService.getProduit().subscribe(
      data =>{
        this.produits = data;
      }
    ); 
  }
  ajout(){
    this.clicke=true;
    }
    annuler(){
      this.clicke=false;
    }
    poster(data){
      this.fournisseurService.postFournisseur(data).subscribe(
        reponse => {
          this.clicke=false;
          this.ngOnInit();
          },error => {
             console.log(error)
             }
       );
       this.ngOnInit();
    }
    deleteFournisseur(f){
      let c = confirm('êtes-vous sûre de vouloir supprimer?');
      if(!c) return;
      this.fournisseurService.deleteFournisseur(f).subscribe(
        data =>{
        this.ngOnInit();}
      );
    }
    getProduits(f){
      this.clikee =true;
      let url = f._links.produits.href;
      this.fournisseurService.getPdFr(url).subscribe(
        reponse =>{
          this.produits = reponse;
        }
      );
    }
    fermer(){this.clikee = false;}
}

