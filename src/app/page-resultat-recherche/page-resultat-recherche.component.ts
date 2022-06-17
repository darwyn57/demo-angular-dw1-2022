import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-page-resultat-recherche',
  templateUrl: './page-resultat-recherche.component.html',
  styleUrls: ['./page-resultat-recherche.component.scss']
})
export class PageResultatRechercheComponent implements OnInit {
  constructor(private route: ActivatedRoute, private client : HttpClient)
   { }

  ngOnInit(): void {
    this.route.params.subscribe(parametres => this.client.get ("http://"+ environment.adresseServeur+"recherche.php" +"?recherche="+ parametres['recherche']).subscribe(reponse => this.listeUtilisateur = reponse))
  }

  public listeUtilisateur:any = [];
  public adresseServeur = environment.adresseServeur;

  rechargerListeUtilisateur(){
    this.client
    .get("http://"+ environment.adresseServeur+"liste-utilisateur.php")
    .subscribe(reponse=> this.listeUtilisateur =reponse)
  }

  onClickDelete(idUtilisateur : number) {
    this.client
    .get("http://"+ environment.adresseServeur+"supprime-utilisateur.php?id=" + idUtilisateur)
    .subscribe(reponse=> this.rechargerListeUtilisateur())
  }
}

