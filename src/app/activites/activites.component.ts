import { Component, OnInit } from '@angular/core';
import { DomaineService } from '../services/domaine.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { ActiviteService } from '../services/activite.service';

@Component({
  selector: 'app-activites',
  templateUrl: './activites.component.html',
  styleUrls: ['./activites.component.css']
})
export class ActivitesComponent implements OnInit {
  activites; domaines;
  constructor(private activiteService: ActiviteService,private domaineService: DomaineService) {}
  ngOnInit(): void {
    this.activiteService.getActivite().subscribe(
      reponse =>{
        this.activites = reponse;
        console.log(this.activites);
      }
    );
    this.domaineService.getDomaines().subscribe(
      reponse =>{
        this.domaines = reponse;
      }
    );
  }
  ajouter(a){
    console.log(a);
    this.activiteService.postActivite(a).subscribe(
      reponse =>{
        console.log("réussi");
        this.ngOnInit();
      }
    );
  }
}
