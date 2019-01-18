import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-forecast-display',
  templateUrl: './forecast-display.component.html',
  styleUrls: ['./forecast-display.component.css']
})
export class ForecastDisplayComponent implements OnInit {
  @Input() public forecast;
  constructor() { }

  ngOnInit() {
  }

}
