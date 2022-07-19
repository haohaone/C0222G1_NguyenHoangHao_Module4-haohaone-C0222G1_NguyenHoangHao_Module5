import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like1',
  templateUrl: './like1.component.html',
  styleUrls: ['./like1.component.css']
})
export class Like1Component implements OnInit {

  like = 0;

  constructor() {
  }

  ngOnInit() {
  }

  likeThis() {
    this.like++;
  }

}
