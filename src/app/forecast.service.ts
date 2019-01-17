import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Search } from './search'
import { catchError } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class ForecastService {
  results: {};
  constructor(private http: HttpClient) { }

 getWeather(cityName: Search){
    console.log(cityName, 'service')
    let params = new HttpParams().set('cityName', cityName.toString())
   return this.http.get('/weather', { params } ).toPromise()
   
    //   {
    //   headers: new HttpHeaders().append('Content-Type', 'application/json'),
    //   params: cityName,
    // })
  } 
}
