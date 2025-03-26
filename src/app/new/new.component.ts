import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl } from '@angular/forms';

@Component({
  selector: 'app-new',
  standalone: false,
  templateUrl: './new.component.html',
  styleUrl: './new.component.css'
})
export class NewComponent implements OnInit {

  title =  new FormControl('');
  price = new FormControl('');

  constructor() {
    console.log("NewComponent::constructor()");
    this.ngOnInit();
   }

  ngOnInit(): void {
    console.log("NewComponent::ngOnInit()");
  }

  onSubmit(form: NgForm) {
    console.log("NewComponent::onSubmit()");
    const newTitle = this.title.value;
    const newPrice = this.price.value;
    console.log("newTitle : " + newTitle);
    console.log("newPrice : " + newPrice);
  }

}