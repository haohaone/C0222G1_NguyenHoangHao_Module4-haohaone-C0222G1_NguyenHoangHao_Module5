import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DictionaryComponent } from './dictionary/dictionary.component';
import {DictionaryServiceService} from "./dictionary-service.service";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import { ResultComponent } from './result/result.component';
import {DictionaryRoutingModule} from "./dictionary-routing.module";
import {DictionaryRoutingRoutingModule} from "./dictionary-routing-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    DictionaryComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    DictionaryRoutingModule,
    DictionaryRoutingRoutingModule
  ],
  providers: [DictionaryServiceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
