import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListsComponent } from './lists/lists.component';
import { DetailsComponent } from './details/details.component';

// Les routes sont définies dans le tableau routes.
// Chaque route est un objet avec deux propriétés : path et component.
// path : le chemin de l'URL.
// component : le composant Angular qui doit être affiché lorsque l'URL correspond au chemin path.
// Par exemple, lorsque l'URL est http://localhost:4200/lists, le composant ListsComponent est affiché.
// Lorsque l'URL est http://localhost:4200/article, le composant ArticleComponent est affiché.
// Lorsque l'URL est http://localhost:4200, le composant ListsComponent est affiché.
const routes: Routes = [
    {path: 'lists', component: ListsComponent},
    {path : 'details/:id', component: DetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
