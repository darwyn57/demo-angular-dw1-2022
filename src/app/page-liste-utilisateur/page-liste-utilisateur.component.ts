import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-liste-utilisateur',
  templateUrl: './page-liste-utilisateur.component.html',
  styleUrls: ['./page-liste-utilisateur.component.scss']
})
export class PageListeUtilisateurComponent implements OnInit {
  public listeUtilisateur:any = [];

  constructor(private client :HttpClient) { }

  ngOnInit(): void {
    this.client
    .get("http://demo.php/back-end-angular-dw1-2022/liste-utilisateur.php")
    .subscribe(reponse=> this.listeUtilisateur =reponse)

  }
  onClickDelete(idUtilisateur : number) {
    this.client
    .get("http://demo.php/back-end-angular-dw1-2022/supprime-utilisateur.php?id=" + idUtilisateur)
    .subscribe(reponse=> {})
  }

}
