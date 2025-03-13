import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  
  message : string = '';

  articles = [
    {
      titre: 'Article 1',
      prix: 80,
      description: 'Description de l\'article 1',
      urlImg: 'assets/img/google.png',
      textAltImg: 'Image de l\'article 1',
      disponible: true
    },
    {
      titre: 'Article 2',
      prix: 230,
      description: 'Description de l\'article 2',
      urlImg: 'assets/img/google.png',
      textAltImg: 'Image de l\'article 2',
      disponible: false
    },    
    {
      titre: 'Article 3',
      prix: 15,
      description: 'Description de l\'article 3',
      urlImg: 'assets/img/google.png',
      textAltImg: 'Image de l\'article 3',
      disponible: true
    }
  ];

  constructor() {
    this.ngOnInit();
  }

  ngOnInit(): void {
    console.log('AppComponent::ngOnInit()');
  }

  onInfos(event : string) : string{
    console.log('AppComponent::onInfos()');
    this.message = "Merci d'avoir voté sur l'article " + event;
    return this.message ;
  }
}