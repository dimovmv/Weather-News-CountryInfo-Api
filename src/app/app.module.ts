import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SettingsPage } from '../pages/settings/settings';
import { NewsPage } from '../pages/news/news';

import { CityProvider } from '../providers/city/city';
import { WeatherProvider } from '../providers/weather/weather';
import { CountryNewsProvider } from '../providers/country-news/country-news';

import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { Observable } from 'rxjs';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
	SettingsPage,
	NewsPage
  ],
  imports: [
    BrowserModule,
	HttpClientModule,
    IonicModule.forRoot(MyApp),	
	IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
	SettingsPage,
	NewsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CityProvider,
    WeatherProvider,
    CountryNewsProvider
  ]
})
export class AppModule {}
