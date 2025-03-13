import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { FormsModule } from '@angular/forms';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DataService], // définit les fournisseurs de services pour l'application.
  bootstrap: [AppComponent] // définit le composant racine de l'application, 
  // la vue principale qui héberge tous les autres composants.
})
export class AppModule { }
