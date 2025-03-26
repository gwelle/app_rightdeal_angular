import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add',
  standalone: false,
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent implements OnInit {

  title : string = '';
  price : number = 0;

  constructor() {
    console.log('AddComponent::constructor()');
    this.ngOnInit();
   }

  ngOnInit() {
    console.log('AddComponent::ngOnInit()');
  }

  onSubmit(form : NgForm){
    console.log('AddComponent::onSubmit()');
    const newTitle = this.title;
    const newPrice = this.price;
    console.log("newTitle : " + newTitle);
    console.log("newPrice : " + newPrice);
  }



}
