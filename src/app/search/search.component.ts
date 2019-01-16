import { Component, OnInit } from '@angular/core';
import { Types } from '../types';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  cityName = '';
  constructor() { }

  ngOnInit() {
  }
  onGetForecast(){
    console.log(this.cityName)
  }

}
