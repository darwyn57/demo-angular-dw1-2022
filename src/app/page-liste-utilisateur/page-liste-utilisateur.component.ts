import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-page-liste-utilisateur',
  templateUrl: './page-liste-utilisateur.component.html',
  styleUrls: ['./page-liste-utilisateur.component.scss']
})
export class PageListeUtilisateurComponent implements OnInit {
  public listeUtilisateur:any = [];
  public adresseServeur = environment.adresseServeur;

  constructor(private client :HttpClient) { }

  ngOnInit(): void {
    this.rechargerListeUtilisateur();

  }

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
