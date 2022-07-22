import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {FacilityComponent} from "./furama/facility/facility.component";
import {CustomerComponent} from "./furama/customer/customer.component";
import {ContractComponent} from "./furama/contract/contract.component";

const routes: Routes = [
  { path: '', pathMatch: 'full',redirectTo: '/facility' },
  { path: 'facility', component: FacilityComponent},
  { path: 'customer', component: CustomerComponent},
  { path: 'contract', component: ContractComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class FuramaRoutingModule { }
