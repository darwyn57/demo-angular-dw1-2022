import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-liste-utilisateur',
  templateUrl: './page-liste-utilisateur.component.html',
  styleUrls: ['./page-liste-utilisateur.component.scss']
})
export class PageListeUtilisateurComponent implements OnInit {
  public listeUtilisateur:any = [
    {nom:"eljadid",prenom:"elhoussine" , competences:['java','php']},
    {nom:"job",prenom:"steve" , competences:[]},
    {nom:"jempf",prenom:"marc" , competences:['js','angular']},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
