import { Component, OnInit } from '@angular/core';
import {Customer} from "./customer";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  idToDelete: string;

  customerList: Customer[] = [
    {id: 'CU-0001',
      name: 'Nguyễn Hoàng Hảo',
      dayOfBirth: '1999-07-08',
      idCard: '201787802',
      address: 'Đà Nẵng',
      type: 'Diamond'},

    {id: 'CU-0002',
      name: 'Nguyễn Thảo Uyên',
      dayOfBirth: '1999-08-13',
      idCard: '768634215',
      address: 'Đà Nẵng',
      type: 'Diamond'},

    {id: 'CU-0003',
      name: 'Nguyễn Duy Trung',
      dayOfBirth: '2003-07-18',
      idCard: '123535141',
      address: 'Quảng Nam',
      type: 'Silver'},

    {id: 'CU-0004',
      name: 'Trần Xuân Trường',
      dayOfBirth: '1997-08-07',
      idCard: '987064120',
      address: 'Đà Nẵng',
      type: 'Gold'},

    {id: 'CU-0005',
      name: 'Trần Mạnh Cường',
      dayOfBirth: '1996-11-11',
      idCard: '041236563',
      address: 'Quảng Bình',
      type: 'Platinum'},
    ];
  constructor() { }

  ngOnInit(): void {
  }

  delete() {
    for (let i = 0; i < this.customerList.length; i++) {
      if (this.customerList[i].id === this.idToDelete){
        this.customerList.splice(i, 1)
        break;
      }
    }
  }

  valueOfId(id: string) {
    this.idToDelete = id;
  }
}
