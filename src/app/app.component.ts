import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

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

  seconds : number = 0;

  constructor() {
    this.ngOnInit();
  }

  ngOnInit(): void {
    console.log('AppComponent::ngOnInit()');
    const counter = interval(1000); // 1s

    // subscribe to the counter and display the value in the console
    // subscribe (event|value, error, complete) 
    counter.subscribe(
      (value) => this.seconds = value,
      (error) => console.error('error : ' + error),
      () =>  console.info('completed')
    );
      
  }

  onInfos(event : string) : string{
    console.log('AppComponent::onInfos()');
    this.message = "Merci d'avoir voté sur l'article " + event;
    return this.message ;
  }
}
