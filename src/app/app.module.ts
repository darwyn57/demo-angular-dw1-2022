import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageAccueilComponent } from './page-accueil/page-accueil.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { PageConnexionComponent } from './page-connexion/page-connexion.component';
import { PageListeUtilisateurComponent } from './page-liste-utilisateur/page-liste-utilisateur.component';

@NgModule({
  declarations: [
    AppComponent,
    PageAccueilComponent,
    PageConnexionComponent,
    PageListeUtilisateurComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
