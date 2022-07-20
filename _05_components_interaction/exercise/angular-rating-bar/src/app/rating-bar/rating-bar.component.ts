import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-rating-bar',
  templateUrl: './rating-bar.component.html',
  styleUrls: ['./rating-bar.component.css']
})
export class RatingBarComponent implements OnInit {
  @Input() ratingStatus: boolean;
  @Input() value: number;
  ratingUnits: number[] = new Array(10);

  constructor() { }

  ngOnInit(): void {
  }

  rating(i: number) {
    this.value = i;
    this.ratingStatus = true;
  }
}
