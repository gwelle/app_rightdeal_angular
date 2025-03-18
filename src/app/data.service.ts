import { Injectable } from '@angular/core';


@Injectable({
  // La propriété providedIn est définie sur '
  // root' pour rendre le service disponible à l'ensemble de l'application.
  // Cela signifie que le service est un singleton et qu'il est disponible pour tous les composants.
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  // Les données de l'application sont stockées dans le service DataService.
  // Les données sont accessibles à partir de n'importe quel composant de l'application.
  articles = [
    {
      id : 1,
      titre: 'Article 1',
      prix: 80,
      description: 'Description de l\'article 1',
      urlImg: 'assets/img/google.png',
      textAltImg: 'Image de l\'article 1',
      disponible: true
    },
    {
      id: 2,
      titre: 'Article 2',
      prix: 230,
      description: 'Description de l\'article 2',
      urlImg: 'assets/img/google.png',
      textAltImg: 'Image de l\'article 2',
      disponible: false
    },    
    {
      id: 3,
      titre: 'Article 3',
      prix: 15,
      description: 'Description de l\'article 3',
      urlImg: 'assets/img/google.png',
      textAltImg: 'Image de l\'article 3',
      disponible: true
    }
  ];

  
  getArticleById(id: number) {
    const article = this.articles.find(elm=> elm.id === id);
    return article ;
  }

  getArticleByTitle(titre: string) {
    const article = this.articles.find(elm=> elm.titre === titre);
    return article ? article.id : 0;
  }
}
