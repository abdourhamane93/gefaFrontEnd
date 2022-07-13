import { Component, OnInit } from '@angular/core';
import { DomaineService } from '../services/domaine.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { ActiviteService } from '../services/activite.service';
import { CampagneService } from '../services/campagne.service';
import { DepenseService } from '../services/depense.service';
import { VentesService } from '../services/ventes.service';

@Component({
  selector: 'app-admin-domaine',
  templateUrl: './admin-domaine.component.html',
  styleUrls: ['./admin-domaine.component.css']
})
export class AdminDomaineComponent implements OnInit {
 fournisseurs; domaine;activites;choix;campagnes;afficher=false;depenses;ventes;
  constructor(private domaineService: DomaineService,
    private activiteService: ActiviteService,
    private campagneService: CampagneService,
    private depenseService: DepenseService,
    private venteService: VentesService,
    private route:ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params) =>{
       this.domaineService.getDomaineById(params.id).subscribe(
         data =>{
          this.activiteService.getActiviteD(params.id).subscribe(
            data =>{
              this.activites = data;
            }
          );
           this.domaine = data;
         }
       );
      }
    );
    this.afficher = false;
  }
 
  getFournisseur(url){
    this.domaineService.getFournisseurs(url).subscribe(
      data =>{
        this.fournisseurs = data
      },
      error =>{ console.log(error);}
    );
  }

  envoie(a){
    this.choix = a;
    this.campagnes = [];
    this.afficher = false;
  }
  ajouterActivite(a){
    a.value.numDomaine = this.domaine.numDomaine;
    this.activiteService.postActivite(a.value).subscribe(
      reponse =>{
        this.ngOnInit();
      }
    );
  }
  getCampagne(id){
    this.campagneService.getCampagnes(id).subscribe(
      response =>{
        this.campagnes = response;
        this.afficher = true;
      }
    );
  }
  ajoutC(c){
    c.value.numActivite = this.choix.numActivite;
    this.campagneService.postCampagne(c.value).subscribe(
      response =>{
        this.ngOnInit();
      }
    );
  }

  sup(id){
    let c = confirm('Voulez-vous vraiment supprimer?');
    if(!c) return;
    this.activiteService.deleteActivite(id).subscribe(
      responses =>{
        this.ngOnInit();
      }
    );
  }
  getDepensesC(id){
    this.depenseService.getDepenseC(id).subscribe(
      response =>{
        this.depenses = response;
        console.log(this.depenses);
      }
    );
  }
  getVentesC(id){
    this.venteService.getVentesCamp(id).subscribe(
      response =>{
        this.ventes = response;
        console.log(this.ventes);
      }
    );
  }
}
