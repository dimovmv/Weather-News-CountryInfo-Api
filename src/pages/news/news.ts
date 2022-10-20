import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';
import { CountryNewsProvider } from '../../providers/country-news/country-news';
import { HttpClient } from '@angular/common/http';
import { CityProvider } from '../../providers/city/city';

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {
	cityInfo:any[];
	countryNews:any[];
	myCity:string;
	chosenCity:string;//user's input
	chosenUnits:string;//user's input
	units:string; 

  constructor(public navCtrl: NavController, public navParams: NavParams, private cnp:CountryNewsProvider,private cp: CityProvider, private storage: Storage) {
  }
	ionViewDidLoad() {   
	 
	  this.storage.get("country")
	  .then((val)=>{
		
		  this.cnp.getNews(val).subscribe(data =>{
		  this.countryNews = data.articles;	//sometimes shows errors in Chrome. It works on MS Edge.
	  });
	  })
	  .catch((err)=>{
		  alert("Error accessing storage");//error message if something wrong
	  }); 	    
  }
}