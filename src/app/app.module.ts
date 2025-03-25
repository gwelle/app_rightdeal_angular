import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { FormsModule } from '@angular/forms';
import { AddComponent } from './add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent] // définit le composant racine de l'application, 
  // la vue principale qui héberge tous les autres composants.
})
export class AppModule { }
