import {Component, OnInit} from '@angular/core';
import {Contract} from "./contract";

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {
  contractList: Contract[] = [
    {
      id: 'CT-0001',
      name: 'Nguyễn Hoàng Hảo',
      startDate: '2022-07-01',
      endDate: '2022-10-18',
      cost: 10000,
      totalPrice: 70544
    },

    {
      id: 'CT-0002',
      name: 'Nguyễn Thảo Uyên',
      startDate: '2022-07-01',
      endDate: '2022-10-28',
      cost: 7000,
      totalPrice: 50560
    },

    {
      id: 'CT-0003',
      name: 'Nguyễn Duy Trung',
      startDate: '2022-08-15',
      endDate: '2022-09-18',
      cost: 3000,
      totalPrice: 34560
    },

    {
      id: 'CT-0004',
      name: 'Trần Xuân Trường',
      startDate: '2022-08-01',
      endDate: '2022-09-18',
      cost: 4543,
      totalPrice: 232579
    },

    {
      id: 'CT-0005',
      name: 'Nguyễn Bảo Long',
      startDate: '2022-06-01',
      endDate: '2022-07-20',
      cost: 700,
      totalPrice: 16000
    },
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
