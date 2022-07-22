import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DictionaryRoutingRoutingModule } from './dictionary-routing-routing.module';
import {RouterModule, Routes} from "@angular/router";
import {ResultComponent} from "./result/result.component";
import {DictionaryComponent} from "./dictionary/dictionary.component";

const routes: Routes = [
  {path: 'result/:word', component: ResultComponent},
  {path: '', component: DictionaryComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    DictionaryRoutingRoutingModule
  ]
})
export class DictionaryRoutingModule { }
