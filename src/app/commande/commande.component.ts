import { Component, OnInit } from '@angular/core';
import { CommandeService } from '../services/commande.service';
import { Router, NavigationEnd } from '@angular/router';
import { ProduitService } from '../services/produit.service';
import { Command } from 'selenium-webdriver';
import { FournisseurService } from '../services/fournisseur.service';
import { StockService } from '../services/stock.service';
import { Stock } from '../model/Stock';
import { ligneCommande } from '../model/ligneCommande';
import { Commande } from '../model/Commande';
import { CampagneService } from '../services/campagne.service';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {
 commandes;;montant;pdStck=new Array();
 fournisseurs;stock;ligneCde;stocks;qute=0;
 clickee = false;campagnes;
 produits; ajout = false; modifAppro;
  constructor(private commadeService: CommandeService,
    private produitService: ProduitService,
    private fournisseurService: FournisseurService,
    private stockService: StockService,
    private campagneService: CampagneService) { }
  ngOnInit(): void {
      this.commadeService.getCommandes().subscribe(
        data =>{
          this.commandes = data;
          console.log(this.commandes);
        }
      );
      
      this.produitService.getProduit().subscribe(
        reponse =>{
          this.produits = reponse;
        }
      );
      this.fournisseurService.getFournisseurs().subscribe(
        reponse =>{this.fournisseurs = reponse;
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
    this.clickee= true;
    this.ajout=false;
   
  }
  annuler(){
    this.ajout = false;
    this.clickee = false;
    this.ngOnInit();
  }
 
  supprimer(cde){
   let c = confirm("voulez vous vraiment supprimé?");
   if(!c) return;
    this.commadeService.supprimerCde(cde._links.self.href).subscribe(
      reponse =>{ console.log("supprimé" +cde);
    this.ngOnInit()}
    );
     
  }
  envoyer(appro){
        this.commadeService.postCommande(appro).subscribe(
          r =>{
            this.ngOnInit();
          }
        );
  }
  modi(c){
    this.modifAppro=c;
  }
  modifier(appro){
    appro.numCommande = this.modifAppro.approvisionnement.numCommande;
    this.commadeService.modif(appro).subscribe(
      response =>{
        console.log(appro);
      }
    );
  }
  }

