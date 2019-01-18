import { Component, OnInit, Input } from '@angular/core';
import { Search } from '../search'


@Component({
  selector: 'app-weather-display',
  templateUrl: './weather-display.component.html',
  styleUrls: ['./weather-display.component.css']
})

export class WeatherDisplayComponent implements OnInit {
  @Input() public weather;
  constructor() { }

  ngOnInit() {
  }

}
