import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  
  message : string = '';
  articles : any;

  //Avec la visibilité private, dataService n'est accessible que dans la classe AppComponent.
    //dataService est injecté dans le constructeur de la classe AppComponent.
    //readonly empêche la modification de la propriété dataService après son initialisation.
  constructor(private readonly dataService: DataService) {
    console.log('AppComponent::constructor()');
    this.ngOnInit();
  }

  ngOnInit(): void {
    console.log('AppComponent::ngOnInit()');

    // AppComponent accède à la propriété articles du service DataService.
    // AppComponent peut accéder aux données de l'application à partir de n'importe quel composant. 
    this.articles = this.dataService.articles;
  }

  onInfos(event : string) : string{
    console.log('AppComponent::onInfos()');
    this.message = "Merci d'avoir voté sur l'article " + event;
    return this.message ;
  }
}