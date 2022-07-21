import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-countdown-time-app',
  templateUrl: './countdown-time-app.component.html',
  styleUrls: ['./countdown-time-app.component.css']
})
export class CountdownTimeAppComponent implements OnInit {
  @Input() time: number;
  public setTime;
  public stringTime: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  startCount() {
     this.setTime = setInterval(() => this.stringTime = this.transform(++this.time), 1000);
  }

  endCount() {
    clearInterval(this.setTime);
  }

  resetCount() {
    this.time = 0;
    this.stringTime = '00 : 00 : 00';
    clearInterval(this.setTime);
  }

  transform(value: number): string {
    let hours: any = Math.floor(value / 3600);
    if (hours < 10) {
      hours = '0' + hours;
    }
    let minute: any = Math.floor((value - (hours * 3600)) / 60);
    if (minute < 10) {
      minute = '0' + minute;
    }
    let second: any = value - (hours * 3600) - (minute * 60);
    if (second < 10) {
      second = '0' + second;
    }
    const time: string = hours + ' : ' + minute + ' : ' + second;
    return time;
  }
}
