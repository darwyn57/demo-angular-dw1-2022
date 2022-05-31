import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAccueilComponent } from './page-accueil/page-accueil.component';
import { PageConnexionComponent } from './page-connexion/page-connexion.component';
import { PageListeUtilisateurComponent } from './page-liste-utilisateur/page-liste-utilisateur.component';

const routes: Routes = [
  { path: "",component: PageAccueilComponent },
  { path: "connexion",component: PageConnexionComponent },
  { path: "utilisateur",component: PageListeUtilisateurComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
