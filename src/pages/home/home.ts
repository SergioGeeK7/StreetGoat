import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Store } from '../store/store'
import { Challenge } from '../challenges/challenge'
import { Gifts } from '../gifts/gifts'
import { Driving } from '../start-driving/driving'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  navegateTo(){
    this.navCtrl.push(Store);
  }
  // This for now because I don't have much time
  navegateToChallenge(){
    this.navCtrl.push(Challenge);
  }
  navegateToGifts(){
    this.navCtrl.push(Gifts)
  }
  navegateToDriving(){
    this.navCtrl.push(Driving)
  }

}
