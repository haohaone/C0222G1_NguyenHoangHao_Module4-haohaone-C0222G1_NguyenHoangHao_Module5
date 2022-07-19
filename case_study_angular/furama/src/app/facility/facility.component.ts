import {Component, OnInit} from '@angular/core';
import {Facility} from "./facility";

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.css']
})
export class FacilityComponent implements OnInit {
  idToDelete: string;

  facilityList: Facility[] = [
    {
      id: 'FA-0001',
      name: 'Hot Spring Retreat - Twin',
      maxPeople: 3,
      areaUse: 70,
      view: 'Mountain view',
      url: 'https://www.banyantree.com/_next/image?url=https%3A%2F%2Fwww.banyantree.com%2Fassets%2F2021-10%2Fhot-spring-retreat-twin-other-image.jpg&w=640&q=75'
    },

    {
      id: 'FA-0002',
      name: 'Hot Spring Retreat - Twin',
      maxPeople: 2,
      areaUse: 50,
      view: 'Mountain view',
      url: 'https://www.banyantree.com/_next/image?url=https%3A%2F%2Fwww.banyantree.com%2Fassets%2F2021-11%2Fhot-spring-retreat-king-hero-image.jpg&w=640&q=75"'
    },

    {
      id: 'FA-0003',
      name: 'Hot Spring Retreat - Twin',
      maxPeople: 3,
      areaUse: 90,
      view: 'Garden view',
      url: 'https://www.banyantree.com/_next/image?url=https%3A%2F%2Fwww.banyantree.com%2Fassets%2F2021-11%2Fhot-spring-pool-villa-hero-image.jpg&w=640&q=75'
    },

    {
      id: 'FA-0004',
      name: 'Hot Spring Retreat - Twin',
      maxPeople: 3,
      areaUse: 70,
      view: 'Mountain view',
      url: 'https://www.banyantree.com/_next/image?url=https%3A%2F%2Fwww.banyantree.com%2Fassets%2F2021-10%2Fhot-spring-retreat-twin-other-image.jpg&w=640&q=75'
    },

    {
      id: 'FA-0005',
      name: 'Hot Spring Retreat - Twin',
      maxPeople: 2,
      areaUse: 50,
      view: 'Mountain view',
      url: 'https://www.banyantree.com/_next/image?url=https%3A%2F%2Fwww.banyantree.com%2Fassets%2F2021-11%2Fhot-spring-retreat-king-hero-image.jpg&w=640&q=75"'
    },

    {
      id: 'FA-0006',
      name: 'Hot Spring Retreat - Twin',
      maxPeople: 3,
      areaUse: 90,
      view: 'Garden view',
      url: 'https://www.banyantree.com/_next/image?url=https%3A%2F%2Fwww.banyantree.com%2Fassets%2F2021-11%2Fhot-spring-pool-villa-hero-image.jpg&w=640&q=75'
    },

    {
      id: 'FA-0007',
      name: 'Hot Spring Retreat - Twin',
      maxPeople: 3,
      areaUse: 70,
      view: 'Mountain view',
      url: 'https://www.banyantree.com/_next/image?url=https%3A%2F%2Fwww.banyantree.com%2Fassets%2F2021-10%2Fhot-spring-retreat-twin-other-image.jpg&w=640&q=75'
    },

    {
      id: 'FA-0008',
      name: 'Hot Spring Retreat - Twin',
      maxPeople: 2,
      areaUse: 50,
      view: 'Mountain view',
      url: 'https://www.banyantree.com/_next/image?url=https%3A%2F%2Fwww.banyantree.com%2Fassets%2F2021-11%2Fhot-spring-retreat-king-hero-image.jpg&w=640&q=75"'
    },

    {
      id: 'FA-0009',
      name: 'Hot Spring Retreat - Twin',
      maxPeople: 3,
      areaUse: 90,
      view: 'Garden view',
      url: 'https://www.banyantree.com/_next/image?url=https%3A%2F%2Fwww.banyantree.com%2Fassets%2F2021-11%2Fhot-spring-pool-villa-hero-image.jpg&w=640&q=75'
    },

  ];


  constructor() {
  }

  ngOnInit(): void {
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
}
