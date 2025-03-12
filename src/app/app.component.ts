import { Component, OnInit } from '@angular/core';
import { merge } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  
  title = 'labonneaffaire';
  prixOne : number = 80;
  prixTwo : number = 230;   
  prixThree : number = 15;
  message : string = '';

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
