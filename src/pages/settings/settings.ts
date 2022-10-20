import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
	
	myCity:string;
	chosenCity:string;//user's input
	chosenUnits:string;//user's input
	units:string; 
	
  constructor(public navCtrl: NavController, public navParams: NavParams,private storage: Storage) {
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
	  this.storage.get("units")
	  .then((valUnits)=>{
		  console.log("VALUNITS = " + valUnits);
		  this.units = valUnits;
	  })
	  .catch((err)=>{
		  alert("Error accessing storage");
	  });  
  }
    
  saveSettings(){
	  
	  //city
	  this.myCity = this.chosenCity;
	  this.chosenCity = ""; //whatever is user's input
	   
	   //                key  ,  value
	   this.storage.set("myCity", this.myCity);
	   this.storage.set("units", this.units);	   
	   
	   //units
	    this.units = this.chosenUnits;
	   this.chosenUnits = ""; //whatever is user's choise
	  	   
	   switch(this.units){        //setting default value of units
		   case "S":
		   this.units = "S";
		   break;
		   case "I":
		   this.units = "I";
		   break;
		   default:
		   this.units ="M"; 
		   break;
	   }
	   //                key  ,   value
	   this.storage.set("myCity", this.myCity);
	   this.storage.set("units", this.units);
	   
	   this.navCtrl.pop();//return us to home page	  
	   
console.log("settings saved");  	   
  } 

}