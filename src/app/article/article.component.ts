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

  nbVotes : number = 0;
  nbLike : number = 0;
  like : boolean = true ;
  comment : string = "Angular c'est super !";

  // @Input() permet de déclarer une propriété d'entrée pour le composant.
  // Cela signifie que la valeur de cette propriété est passée par un composant parent.
  // Dans notre cas, le composant parent est AppComponent.
  @Input() titreArticle : string = '' ;
  @Input() prixArticle : number = 0 ;
  @Input() description : string = 'Description de l\'article'; ;
  @Input() urlImg : string = '';
  @Input() textAltImg : string = '';
  @Input() disponible : boolean = false;

  // @Output() permet de déclarer une propriété de sortie pour le composant.
  // Cela signifie que le composant enfant peut émettre des événements vers le composant parent.
  // Dans notre cas, le composant enfant est ArticleComponent.
  @Output() infos = new EventEmitter<string>();

  onLike() {
    console.log('ArticleComponent::onLike()');

    if(this.like === true){
      this.nbLike++;
      this.like = false;
    }
    else{
      this.nbLike--;
      this.like = true;
    }
    // émettre un événement vers le composant parent
    this.infos.emit(this.titreArticle);
  }

  // Méthode qui retourne la couleur du texte en fonction de la disponibilité de l'article
  getColor(){
    return(this.disponible === true ) ? 'green' : 'red';
  }
}
