import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  num1:number = 0;
  num2:number = 0;
  mark:String = "";
  result:number = 0;

  constructor() { }

  ngOnInit(): void {
  }


  calculator() {
    switch (this.mark) {
      case '+':
        this.result = this.num1 + this.num2;
        break;
      case '-':
        this.result = this.num1 - this.num2;
        break;
      case '*':
        this.result = this.num1 * this.num2;
        break;
      case '/':
        this.result = this.num1 / this.num2;
        break;
      default:
        this.result = 0;
    }
  }
}
