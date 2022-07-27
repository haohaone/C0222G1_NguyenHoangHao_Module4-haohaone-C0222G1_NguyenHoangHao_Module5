import {Component, OnInit} from '@angular/core';
import {Facility} from "./facility";
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {FacilityService} from "../service/facility/facility.service";
import {Subscription} from "rxjs";
import {log} from "util";

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.css']
})
export class FacilityComponent implements OnInit {
  idToDelete: string;
  facility: Facility;

  facilityList: Facility[];
  subscription: Subscription;

  views:string[] = ['Garden view', 'Mountain view', 'Room view']

  facilityForm: FormGroup;

  msg: string = " "

  constructor(private facilityService: FacilityService) {
  }

  ngOnInit(): void {
    this.facilityForm = new FormGroup({
      id: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      maxPeople: new FormControl('', Validators.required),
      areaUse: new FormControl('', Validators.required),
      view: new FormControl('', Validators.required),
      url: new FormControl('', Validators.required)
    })

    this.subscription = this.facilityService.getList().subscribe((data: any) =>
    {this.facilityList = data},
      error =>{console.log(error)});
  }

  updateList(){
    this.subscription = this.facilityService.getList().subscribe((data: any) =>
      {this.facilityList = data},
      error =>{console.log(error)});
  }

  checkId(abstractControl: AbstractControl): any {
    let flag: boolean = true;
    // console.log(this.facilityList)
    // for (let i = 0; i < this.facilityList.length; i++) {
    //   if (this.facilityList[i] === abstractControl.value){
    //     return {isExitsId: true}
    //   }
    // }
    return null
    // return (flag)? null : {isExitsId: true}
    // console.log(abstractControl.value)
    // return null
  }


  delete() {
    this.facilityService.deleteById(this.idToDelete).subscribe(()=>{},
      error => {},() => {this.updateList()})
    this.msg = 'Delete successful!'
  }

  valueOfId(id: string) {
    this.idToDelete = id;
  }



  onSubmit() {
    this.facility = this.facilityForm.value;
    this.facilityService.save(this.facility).subscribe(()=>{},
      error => {},() => {this.updateList()})
    this.msg = 'Add new successful!'
  }

  edit(id: string) {
    this.facilityService.findById(id).subscribe(value => {this.facilityForm.patchValue(value)})
  }


  editFacility() {
    this.facility = this.facilityForm.value;
    this.facilityService.edit(this.facility).subscribe(()=>{},
      error => {},() => {this.updateList()})
    this.msg = 'Edit successful!'
  }
}
