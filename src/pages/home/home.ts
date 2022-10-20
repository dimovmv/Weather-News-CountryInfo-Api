import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SettingsPage } from '../../pages/settings/settings';
import { NewsPage } from '../../pages/news/news';

import { WeatherProvider } from '../../providers/weather/weather';
import { CityProvider } from '../../providers/city/city';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	
	cityInfo:any[];
	weatherInfo:any[];
	myCity:string;
	chosenCity:string;//user's input
	chosenUnits:string;//user's input
	units:string; 

  constructor(public navCtrl: NavController, private wp: WeatherProvider, private cp: CityProvider, private storage: Storage) {
	
  }
  
  //geting values from storage
  ionViewWillEnter(){
	  this.storage.get("myCity")
	  .then((val)=>{
		  console.log("VAL = " + val)
		  this.myCity = val;
		  this.cp.getCity(this.myCity).subscribe(data =>{
		  this.cityInfo=data;
		  console.log(data);
		  this.wp.getWeatherInfo(this.cityInfo[0].latlng[0], this.cityInfo[0].latlng[1], this.units).subscribe(data =>{
		  this.weatherInfo = data.data;	
		  this.storage.set("country", this.cityInfo[0].cca2);
	  }); 
	  });		 
	  })
	  .catch((err)=>{
		  alert("Error accessing storage");//error message if something wrong
	  });
	  
	  this.storage.get("units")
	  .then((valUnits)=>{
		  console.log("VALUNITS = " + valUnits);
		  this.units = valUnits;
	  })
	  .catch((err)=>{
		  alert("Error accessing storage");
	  }); 	  
  }
    
 ionViewDidLoad(){                                    
	  console.log("Homepage loaded"); 	  
  }  
  
  openSettings(){
	  this.navCtrl.push(SettingsPage);
	 // console.log("settings");
  }
  openNews(){
	  this.navCtrl.push(NewsPage);
  }
}
