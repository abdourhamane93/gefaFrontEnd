import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { DetailComponent } from './detail/detail.component';
import { ActivitesComponent } from './activites/activites.component';
import { CampagnesComponent } from './campagnes/campagnes.component';
import { FournisseursComponent } from './fournisseurs/fournisseurs.component';
import { AdminDomaineComponent } from './admin-domaine/admin-domaine.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { CommandeComponent } from './commande/commande.component';
import { ProduitsComponent } from './produits/produits.component';
import { StockComponent } from './stock/stock.component';
import { DepensesComponent } from './depenses/depenses.component';
import { EmployeComponent } from './employe/employe.component';
import { UsersComponent } from './users/users.component';
import { VentesComponent } from './ventes/ventes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { ImageDefautPipe } from './image-defaut.pipe';
import { HighchartsChartModule } from 'highcharts-angular';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AcceuilComponent,
    HeaderComponent,
    FooterComponent,
    DetailComponent,
    ActivitesComponent,
    CampagnesComponent,
    FournisseursComponent,
    AdminDomaineComponent,
    SidebarComponent,
    CommandeComponent,
    ProduitsComponent,
    StockComponent,
    DepensesComponent,
    EmployeComponent,
    UsersComponent,
    VentesComponent,
    ImageDefautPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HighchartsChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
