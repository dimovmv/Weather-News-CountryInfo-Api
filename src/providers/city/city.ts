import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';

@Injectable()
export class CityProvider {
	myCity:string;
	chosenCity:string;

  constructor(public http: HttpClient, private storage: Storage) {
    console.log('Hello CityProvider Provider');
  }   
  //geting values from storage
  ionViewWillEnter(){
	  this.storage.get("myCity")
	  .then((val)=>{
		  console.log("VAL = " + val)
		  this.myCity = val;
	  })
	  .catch((err)=>{
		  alert("Error accessing storage");//error message if something wrong
	  });  
	  	  
  } 
  getCity(myCity):Observable<any> {	
	  return this.http.get('https://restcountries.com/v3.1/capital/'+ myCity);
  }
}