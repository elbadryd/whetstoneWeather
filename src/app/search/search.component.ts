import { Component, OnInit } from '@angular/core';
import { ForecastService } from '../forecast.service';
import { Observable } from 'rxjs'
import { Search } from '../search'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  cityName: null;
  weather: any;
  forecast: any;
  constructor(private forecastService: ForecastService) { }

  ngOnInit() {
  }
  onGetWeather(): void {
    console.log(this.cityName, 'search component')
    this.weather = this.forecastService.getWeather(this.cityName);
  }
  onGetForecast(): void {
    console.log(this.cityName, 'search component')
    this.forecast = this.forecastService.getForecast(this.cityName);
  }

}
