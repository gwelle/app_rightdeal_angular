import { NgFor } from '@angular/common';
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
    console.log('title: ' + this.title);
    console.log('price: ' + this.price);
  }



}
