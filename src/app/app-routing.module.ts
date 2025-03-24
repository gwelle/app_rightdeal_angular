import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListsComponent } from './lists/lists.component';
import { DetailsComponent } from './details/details.component';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// Les routes sont définies dans le tableau routes.
// Chaque route est un objet avec deux propriétés : path et component.
// path : le chemin de l'URL.
// component : le composant Angular qui doit être affiché lorsque l'URL correspond au chemin path.
// Par exemple, lorsque l'URL est http://localhost:4200/lists, le composant ListsComponent est affiché.
// Lorsque l'URL est http://localhost:4200/article, le composant ArticleComponent est affiché.
// Lorsque l'URL est http://localhost:4200, le composant ListsComponent est affiché.
const routes: Routes = [
    {path: '', redirectTo: '/', pathMatch: 'full'},
    {path: 'home', component: AppComponent}, 
    {path: 'lists', component: ListsComponent, 
      children: [{path : 'details/:id', component: DetailsComponent}]},
    {path: '404', component: PageNotFoundComponent},
    {path: '**', component: PageNotFoundComponent}
     //cette route doit être la dernière route du tableau routes 
     // pour que le composant PageNotFoundComponent soit affiché 
     // lorsque l'URL ne correspond à aucun chemin path. 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
