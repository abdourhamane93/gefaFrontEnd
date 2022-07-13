import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LoginService } from '../services/login.service';
import { isNull } from 'util';
import { DomaineService } from '../services/domaine.service';
import { CampagneService } from '../services/campagne.service';
import { ActiviteService } from '../services/activite.service';
import { Campagne } from '../model/campagne';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import { Router } from '@angular/router';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {
  
  domaines; erreurDomaine = false;produits;
  selectedDomaine;
  Highcharts = Highcharts;
  chartOptions={};
  Highcharts2 = Highcharts;
  chartOptions2 = {};
  constructor(private domaineService:DomaineService,
    private produitService:ProduitService,
    private router: Router ) { }

 
  ngOnInit(): void {
      this.domaineService.getDomaines()
        .subscribe(
          data =>{
          this.domaines = data;
          console.log(this.domaines);
        }, error =>{
          console.log(error);
      });
      this.produitService.getProduit().subscribe(
        response =>{
          this.produits = response;
         
        }
      );
    this.chartOptions = {
      chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      height:250,
      width:500,
      type: 'pie'
  },
  title: {
      text: 'Ventes'
  },
  tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  accessibility: {
    point: {
        valueSuffix: '%'
    }
},
  plotOptions: {
      pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>: {point.percentage:.1f} %'
          }
      }
  },
  exporting:{
    enabled: true
  },
  credits:{
    enabled: false
  },
  series: [{
      name: 'Poucentage',
      colorByPoint: true,
      data: [{
          name: 'Oranges',
          y: 61.41,
          sliced: true,
          selected: true
      }, {
          name: 'Mangues',
          y: 11.84
      }, {
          name: 'Goyave',
          y: 10.85
      }, {
          name: 'Sounsoun',
          y: 4.67
      }, {
          name: 'Poulets',
          y: 4.18
      }, {
          name: 'Oeufs',
          y: 1.64
      }, {
          name: 'fumiers',
          y: 1.6
      }]
  }]
};
HC_exporting(Highcharts);
  
    

this.chartOptions2 = {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    height:250,
    width:500
},
  title: {
    text: 'Dépenses'
},
subtitle: {
    text: 'Plain'
},
xAxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
},
series: [{
    type: 'column',
    colorByPoint: true,
    data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 250.5, 216.4, 194.1, 95.6, 54.4],
    showInLegend: false
}]
}
    }


    nouveauDomaine(d){
      this.domaineService.postDomaine(d).subscribe(
        reponse =>{
          console.log("reussi");
          this.ngOnInit();
        },
        error =>{
          this.erreurDomaine = true;
        }
      );
    }
    
    gerer(d){
      const link = ['domaines',d.numDomaine];
      this.router.navigate(link);
    }
    
    }
    

