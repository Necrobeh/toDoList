import { Component } from '@angular/core';

@Component({
  selector: 'app-week-grid',
  templateUrl: './week-grid.component.html',
  styleUrls: ['./week-grid.component.scss']
})
export class WeekGridComponent {

  numberOfHoursInADay: number = 24;
  day: number[] = [];
  week : string[] = ['lundi','mardi','mercredi','jeudi','vendredi','samedi','dimanche']

  constructor() {
    this.setUpTimeSpace();
  }

  setUpTimeSpace(): void {
      for (let i = 0; i < this.numberOfHoursInADay; i++) {
        this.day.push(1 + i);
      }
  }
}