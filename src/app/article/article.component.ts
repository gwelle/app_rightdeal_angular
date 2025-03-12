import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-article',
  standalone: false,
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent implements OnInit {

  constructor() {
      this.ngOnInit();
   }
  ngOnInit(): void {
    console.log('ArticleComponent::ngOnInit()');
  }

  textAltImg : string = 'Google logo';
  urlImg : string = 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png';
  nbLike : number = 0;
  comment : string = "Angular c'est super !";

  // @Input() permet de déclarer une propriété d'entrée pour le composant.
  // Cela signifie que la valeur de cette propriété est passée par un composant parent.
  // Dans notre cas, le composant parent est AppComponent.
  @Input() titreArticle : string = '' ;
  @Input() prixAtricle : number = 0 ;

  // @Output() permet de déclarer une propriété de sortie pour le composant.
  // Cela signifie que le composant enfant peut émettre des événements vers le composant parent.
  // Dans notre cas, le composant enfant est ArticleComponent.
  @Output() infos = new EventEmitter<string>();

  nbVotes : number = 0;
  disponible : boolean = false ;

  onLike() {
    console.log('ArticleComponent::onLike()');
    this.nbLike++;
    this.nbVotes++;

    // émettre un événement vers le composant parent
    this.infos.emit(this.titreArticle);
  }
}
