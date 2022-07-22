import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './furama/header/header.component';
import { FooterComponent } from './furama/footer/footer.component';
import { FacilityComponent } from './furama/facility/facility.component';
import { CustomerComponent } from './furama/customer/customer.component';
import { ContractComponent } from './furama/contract/contract.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FuramaRoutingModule} from "./furama-routing.module";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FacilityComponent,
    CustomerComponent,
    ContractComponent,
  ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule,
        FuramaRoutingModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
