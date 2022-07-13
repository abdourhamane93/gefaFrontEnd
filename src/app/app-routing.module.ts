import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ActivitesComponent } from './activites/activites.component';
import { AdminDomaineComponent } from './admin-domaine/admin-domaine.component';
import { FournisseursComponent } from './fournisseurs/fournisseurs.component';
import { CommandeComponent } from './commande/commande.component';
import { ProduitsComponent } from './produits/produits.component';
import { StockComponent } from './stock/stock.component';
import { DepensesComponent } from './depenses/depenses.component';
import { EmployeComponent } from './employe/employe.component';
import { VentesComponent } from './ventes/ventes.component';
import {UsersComponent} from './users/users.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path: 'domaine', component: AcceuilComponent, children:[
    {path:':activites', component:ActivitesComponent},
    {path:':fournisseurs', component: AdminDomaineComponent}
  ]},
  {path:'domaines/:id', component: AdminDomaineComponent},
  //{path: 'domaines/:fournisseurs', component: AdminDomaineComponent},
  {path: 'fournisseur', component: FournisseursComponent},
  {path: 'commande', component: CommandeComponent},
  {path: 'produit', component: ProduitsComponent},
  {path: 'stocks', component: StockComponent},
  {path: 'depenses', component: DepensesComponent},
  {path: 'employes', component: EmployeComponent},
  {path: 'ventes', component: VentesComponent},
  {path: 'users',component:UsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
