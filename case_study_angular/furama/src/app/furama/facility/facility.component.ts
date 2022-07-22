import {Component, OnInit} from '@angular/core';
import {Facility} from "./facility";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.css']
})
export class FacilityComponent implements OnInit {
  idToDelete: string;
  facility: Facility;

  facilityList: Facility[] = [
    {
      id: 'FA-0001',
      name: 'Hot Spring Retreat - Twin',
      maxPeople: 3,
      areaUse: 70,
      view: 'Mountain view',
      url: 'https://www.banyantree.com/_next/image?url=https%3A%2F%2Fwww.banyantree.com%2Fassets%2F2021-10%2Fhot-spring-retreat-twin-other-image.jpg&w=640&q=75'
    },

    // {
    //   id: 'FA-0002',
    //   name: 'Hot Spring Retreat - Twin',
    //   maxPeople: 2,
    //   areaUse: 50,
    //   view: 'Mountain view',
    //   url: 'https://www.banyantree.com/_next/image?url=https%3A%2F%2Fwww.banyantree.com%2Fassets%2F2021-11%2Fhot-spring-retreat-king-hero-image.jpg&w=640&q=75'
    // },
    //
    // {
    //   id: 'FA-0003',
    //   name: 'Hot Spring Retreat - Twin',
    //   maxPeople: 3,
    //   areaUse: 70,
    //   view: 'Garden view',
    //   url: 'https://www.banyantree.com/_next/image?url=https%3A%2F%2Fwww.banyantree.com%2Fassets%2F2021-11%2Fhot-spring-pool-villa-hero-image.jpg&w=640&q=75'
    // },
    //
    // {
    //   id: 'FA-0004',
    //   name: 'Kids Club',
    //   maxPeople: 50,
    //   areaUse: 500,
    //   view: 'Amusement parks',
    //   url: 'https://www.banyantree.com/_next/image?url=https%3A%2F%2Fwww.banyantree.com%2Fassets%2F2021-10%2Ffacilities-kids-club.jpg&w=640&q=75'
    // },
    //
    // {
    //   id: 'FA-0005',
    //   name: 'Meeting Room',
    //   maxPeople: 100,
    //   areaUse: 800,
    //   view: 'Room view',
    //   url: 'https://www.banyantree.com/_next/image?url=https%3A%2F%2Fwww.banyantree.com%2Fassets%2F2021-10%2Ffacilities-meeting-room.jpg&w=640&q=75'
    // },
    //
    // {
    //   id: 'FA-0006',
    //   name: 'Fitness Club',
    //   maxPeople: 70,
    //   areaUse: 800,
    //   view: 'Room view',
    //   url: 'https://www.banyantree.com/_next/image?url=https%3A%2F%2Fwww.banyantree.com%2Fassets%2F2021-10%2Ffacilities-fitness-club.jpg&w=640&q=75'
    // },
    //
    // {
    //   id: 'FA-0007',
    //   name: 'Yoga club',
    //   maxPeople: 30,
    //   areaUse: 400,
    //   view: 'Garden view',
    //   url: 'https://www.banyantree.com/_next/image?url=https%3A%2F%2Fwww.banyantree.com%2Fassets%2F2021-10%2Ffacilities-yoga-room.jpg&w=640&q=75'
    // },
    //
    // {
    //   id: 'FA-0008',
    //   name: 'Couple Restaurant',
    //   maxPeople: 100,
    //   areaUse: 700,
    //   view: 'Room view',
    //   url: 'https://www.banyantree.com/_next/image?url=https%3A%2F%2Fwww.banyantree.com%2Fassets%2F2021-10%2Fother-3_0.jpg&w=1080&q=75'
    // },
    //
    // {
    //   id: 'FA-0009',
    //   name: 'Tea Club',
    //   maxPeople: 30,
    //   areaUse: 300,
    //   view: 'Room view',
    //   url: 'https://www.banyantree.com/_next/image?url=https%3A%2F%2Fwww.banyantree.com%2Fassets%2F2021-10%2Fsanctuaries-3_0.jpg&w=1080&q=75'
    // },

  ];

  views:string[] = ['Garden view', 'Mountain view', 'Room view']

  facilityForm: FormGroup;


  constructor() {
  }

  ngOnInit(): void {
    this.facilityForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      maxPeople: new FormControl(),
      areaUse: new FormControl(),
      view: new FormControl('', Validators.required),
      url: new FormControl()
    })
  }

  delete() {
    for (let i = 0; i < this.facilityList.length; i++) {
      if (this.facilityList[i].id === this.idToDelete){
        this.facilityList.splice(i, 1)
        break;
      }
    }
  }

  valueOfId(id: string) {
    this.idToDelete = id;
  }

  onSubmit() {
    this.facility = this.facilityForm.value;
    this.facilityList.push(this.facility);
    console.log(this.facilityList)
    // this.facilityForm.setValue(this.facility);
    // console.log(this.facilityList);
  }
}
