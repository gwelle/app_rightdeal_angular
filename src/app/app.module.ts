import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddComponent } from './add/add.component';
import { CommonModule } from '@angular/common';
import { NewComponent } from './new/new.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    AddComponent,
    NewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent] // définit le composant racine de l'application, 
  // la vue principale qui héberge tous les autres composants.
})
export class AppModule { }
