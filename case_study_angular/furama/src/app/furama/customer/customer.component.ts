import { Component, OnInit } from '@angular/core';
import {Customer} from "./customer";
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {Subscription} from "rxjs";
import {CustomerService} from "../service/customer/customer.service";
import {TypeCustomer} from "./type-customer";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  idToDelete: string;
  customer: Customer
  customerForm: FormGroup;
  customerList: Customer[];
  typeCustomer: TypeCustomer[];
  msg: string = '';
  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerForm = new FormGroup({
      id: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      dayOfBirth: new FormControl('', [Validators.required, this.check18Age]),
      idCard: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
    });

    this.customerService.getTypeCustomer().subscribe((data: any) =>
      {this.typeCustomer = data},
      error =>{console.log(error)});

    this.customerService.getList().subscribe((data: any) =>
      {this.customerList = data},
      error =>{console.log(error)});
  }

  updateList(){
     this.customerService.getList().subscribe((data: any) =>
      {this.customerList = data},
      error =>{console.log(error)});

    this.customerService.getTypeCustomer().subscribe((data: any) =>
      {this.typeCustomer = data},
      error =>{console.log(error)});
  }

  delete() {
    this.customerService.deleteById(this.idToDelete).subscribe((data)=>{},
      error => {}, () => {this.updateList()});
    this.msg = 'Delete successful!'
  }

  valueOfId(id: string) {
    this.idToDelete = id;
  }

  addNew(){
    this.customer = this.customerForm.value;
    this.customerService.save(this.customer).subscribe(()=>{},
      error => {},() => {this.updateList()})
    this.msg = 'Add new successful!'
  }

  private check18Age(abstractControl: AbstractControl): any {
    let today = new Date();
    let birthDate = new Date(abstractControl.value);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age >= 18? null: {not18: true};
  }

  edit(id: string) {
    this.customerService.findById(id).subscribe(value => {this.customerForm.patchValue(value)})
  }


  editCustomer() {
    this.customer = this.customerForm.value;
    this.customerService.edit(this.customer).subscribe(()=>{},
      error => {},() => {this.updateList()})
    this.msg = 'Edit successful!'
  }
}
