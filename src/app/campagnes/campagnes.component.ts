import { Component, OnInit } from '@angular/core';
import { CampagneService } from '../services/campagne.service';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import { VentesService } from '../services/ventes.service';
import { ActiviteService } from '../services/activite.service';

@Component({
  selector: 'app-campagnes',
  templateUrl: './campagnes.component.html',
  styleUrls: ['./campagnes.component.css']
})
export class CampagnesComponent implements OnInit {
   campagnes;ventes;activites;
   Highcharts = Highcharts;
   chartOptions={};
  constructor(private campagneService: CampagneService,private venteService:VentesService) { }
 
  ngOnInit(): void {
    this.campagneService.getCampagne().subscribe(
      reponse =>{
        this.campagnes = reponse;
        console.log(this.campagnes);
      }
    );
    this.venteService.getVentes().subscribe(
    reponse =>{
        this.ventes = reponse;
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
  
  }

}
