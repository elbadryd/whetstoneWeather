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
  results: any;
  constructor(private forecastService: ForecastService) { }

  ngOnInit() {
  }
  onGetForecast(): void {
    console.log(this.cityName, 'search component')
    this.results = this.forecastService.getWeather(this.cityName);
  }

}
