import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Geolocation } from '@ionic-native/geolocation';

import { MyApp } from './app.component';
import { Store } from '../pages/store/store'
import { HomePage } from '../pages/home/home';
import { Challenge } from '../pages/challenges/challenge'
import { Gifts } from '../pages/gifts/gifts'
import { Driving } from '../pages/start-driving/driving'
import { Result } from '../pages/result-popup/result'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Store,
    Challenge,
    Gifts,
    Driving,
    Result
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Store,
    Challenge,
    Gifts,
    Driving,
    Result
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
