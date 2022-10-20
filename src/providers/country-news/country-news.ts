import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';

@Injectable()
export class CountryNewsProvider {
//	apiKey:string = "27db9b9ed30843f0975206d630c55321";
	cityInfo:any[]; 
	country:string;

  constructor(public http: HttpClient, private storage: Storage) {
    console.log('Hello CountryNewsProvider Provider');
  }
  getNews(country):Observable<any> {	
  return this.http.get('http://newsapi.org/v2/top-headlines?country='+country+'&pageSize=5&apiKey=27db9b9ed30843f0975206d630c55321');  	  
  } 
}