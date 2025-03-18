import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-details',
  standalone: false,
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {

  id: number | undefined;
  titre: string | undefined;
  prix: number | undefined;
  description: string | undefined;
  urlImg: string | undefined;

  constructor(private readonly route: ActivatedRoute,private readonly dataService: DataService) {
    this.ngOnInit();

   }
  ngOnInit(): void {
    console.log("DetailsComponent::ngOnInit()");

    //récupérer l'id de l'article passé en paramètre dans l'url
     //id est le nom du paramètre défini dans le fichier de configuration de la route
    const id = this.route.snapshot.params['id']; 
    this.id = id; //affecter la valeur de l'id à la propriété id de la classe

    this.titre = this.dataService.getArticleById(id)?.titre;
    this.prix = this.dataService.getArticleById(id)?.prix;
    this.description = this.dataService.getArticleById(id)?.description;
    this.urlImg = this.dataService.getArticleById(id)?.urlImg;

  }

   

}
