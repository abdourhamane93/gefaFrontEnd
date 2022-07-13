import { Component, OnInit } from '@angular/core';
import { StockService } from '../services/stock.service';
import { ProduitService } from '../services/produit.service';
import { CommandeService } from '../services/commande.service';
import { FournisseurService } from '../services/fournisseur.service';
import { Commande } from '../model/Commande';
import { ligneCommande } from '../model/ligneCommande';
import { Stock } from '../model/Stock';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
  stocks;
  constructor(private stockService: StockService, private produitService: ProduitService
    ) { }

  ngOnInit(): void {
    this.stockService.getStock().subscribe(
      data =>{
        this.stocks = data;
        console.log(this.stocks);
      }
    );
  }
    ajouter(p){
      this.produitService.postProduit(p).subscribe(
        response =>{
          this.ngOnInit();
        }
      );
    }
}

