import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // btnActive = 'secondary';
    Animales = [{
    nombre: "Hellow",
    raza: "Hellow"
  },
  {
    nombre: "Hellow",
    raza: "Hellow"
  },{
    nombre: "Hellow",
    raza: "Hellow"
  },{
    nombre: "Hellow",
    raza: "Hellow"
  },
 
  ]
  buttonColor =['secondary','dark','danger'];
  constructor(public navCtrl: NavController) {

  }
  


  isSelected(event) {
    console.log(event);
    return 'primary';
    // event.target.getAttribute('selected') ? 'primary' : '';
  }

  someAction(i)
  {
    var item = this.buttonColor[Math.floor(Math.random()*this.buttonColor.length)];
    this.buttonColor[i]=this.buttonColor[item];
  }
}
