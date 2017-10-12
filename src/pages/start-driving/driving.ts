import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Result } from '../result-popup/result'

declare var google;
@Component({
  selector: 'page-driving',
  templateUrl: 'driving.html'
})
export class Driving {
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  kmph: number = 0.0
  currentInterval: any
  currentTrackingDemon:any
  isDriving: boolean = false
  trackSpeed = []
  marker: any
  updateInterval = 4000
  constructor(public navCtrl: NavController, public geolocation: Geolocation, public modalCtrl: ModalController) {

  }
  presentPopover(badDriver: boolean, speedAverage: number) {
    const profileModal = this.modalCtrl.create(Result, { badDriver, speedAverage });
    profileModal.present();
  }
  ionViewDidLoad() {
    this.createMap();
  }
  ngOnDestroy(){
    clearInterval(this.currentTrackingDemon);
  }
  startDriving() {
    if (this.isDriving) {
      this.isDriving = false;
      this.kmph = 0.0;
      this.getResult();
      clearInterval(this.currentInterval);
      return;
    }
    this.saveRandom();
    this.isDriving = true;
    this.currentInterval = setInterval(() => {
      this.saveRandom();
    }, this.updateInterval);
  }
  saveRandom(range: number = 130) {
    const random = Number((Math.random() * range).toFixed(0));
    this.trackSpeed.push(random);
    this.kmph = random;
  }
  getResult() {
    const badDriver = this.trackSpeed.findIndex((n) => n > 80) !== -1;
    const speedAverage = this.trackSpeed.reduce((a, b) => a + b, 0) / this.trackSpeed.length;
    this.trackSpeed = [];
    this.presentPopover(badDriver, speedAverage)
  }
  createMap() {
    const mapOptions = {
      zoom: 17,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    this.marker = new google.maps.Marker({
      map: this.map,
      icon: 'assets/img/driver/sportscar.png',
      position: this.map.getCenter()
    });
    this.startTrackingDemon();
  }
  startTrackingDemon() {
    this.getCurrentPosition();
    this.currentTrackingDemon = setInterval(this.getCurrentPosition, this.updateInterval * 2);
  }
  getCurrentPosition = ()=> {
    this.geolocation.getCurrentPosition().then((position) => {
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      this.marker.setPosition(latLng);
      this.map.panTo(latLng);
    }, (err) => {
      console.log(err);
    });
  }
}
