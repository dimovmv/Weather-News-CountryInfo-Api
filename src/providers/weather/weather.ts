import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';

@Injectable()
export class WeatherProvider {
	
  constructor(public http: HttpClient, private storage: Storage) {
    console.log('Hello WeatherProvider Provider');		
	} 
	
	getWeatherInfo(lat, lon, units): Observable<any> {	
  return this.http.get("http://api.weatherbit.io/v2.0/current?lat="+lat+"&lon="+lon+"&key=adb145aabf1845cbb40a63a4234e5bee&units="+units);  	  
  }
}
