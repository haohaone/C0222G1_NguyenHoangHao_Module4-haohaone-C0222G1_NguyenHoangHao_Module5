import {Component, OnInit} from '@angular/core';
import {Contract} from "./contract";
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {Customer} from "../customer/customer";
import {CustomerComponent} from "../customer/customer.component";

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {
  contractForm: FormGroup;
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
  msg: string = '';
  customerComponent: CustomerComponent;
  customerList: Customer[] = this.customerComponent.customerList;

  constructor() {
  }

  ngOnInit(): void {
    this.contractForm = new FormGroup({
      id: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      startDate: new FormControl('', Validators.required),
      endDate: new FormControl('', Validators.required),
      cost: new FormControl('', Validators.required),
      totalPrice: new FormControl('', Validators.required),
    }, this.checkEndDate)
  }

  addNew(){
    const contract = this.contractForm.value;
    this.contractList.push(contract);
    this.msg = 'Add new successful!'
  }

  checkEndDate(abstractControl: AbstractControl): any{
    console.log(abstractControl.errors)
      const startDate = new Date(abstractControl.value.startDate);
      const endDate = new Date(abstractControl.value.endDate);
      return (endDate.getTime() >= startDate.getTime())? null : {beforeDate: true};
  }
}
