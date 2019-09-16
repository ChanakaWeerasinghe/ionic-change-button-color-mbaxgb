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
  
  btnActivate(ionicButton) {
    if(ionicButton._color === 'dark')
      ionicButton.color =  'primary';
    else
      ionicButton.color = 'dark';
  }

  isSelected(event) {
    console.log(event);
    return 'primary';
    // event.target.getAttribute('selected') ? 'primary' : '';
  }

  someAction(i)
  {
    console.log(i)
  }
}
