import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy {
  
  title = 'labonneaffaire';
  prixOne : number = 80;
  prixTwo : number = 230;   
  prixThree : number = 15;
  message : string = '';

  seconds: string = '';
  compteurSubscription: Subscription | undefined;

  constructor() {
    this.ngOnInit();
  }

  ngOnInit(): void {
    console.log('AppComponent::ngOnInit()');


    const counter = interval(1000).pipe(
      filter(value => value % 2 === 0),
      map((value: number) => value % 2 === 0 ? `${value} est pair` :`${value} est impair`));
    

    // subscribe to the counter and display the value in the console
    // subscribe (event|value, error, complete) 
    this.compteurSubscription = counter.subscribe(
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

  ngOnDestroy(): void {
    console.log('AppComponent::ngOnDestroy()');

    // unsubscribe to the counter when the component is destroyed to avoid memory leaks
    this.compteurSubscription?.unsubscribe();
  }
}
