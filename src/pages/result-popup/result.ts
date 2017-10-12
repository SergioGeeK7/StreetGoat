import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-result',
  templateUrl: 'result.html'
})
export class Result {
  badDriver:boolean = false
  speedAverage:number
  constructor(public navCtrl: NavController, navParams: NavParams) {
    this.badDriver = navParams.get('badDriver');
    this.speedAverage = navParams.get('speedAverage');
  }
}

