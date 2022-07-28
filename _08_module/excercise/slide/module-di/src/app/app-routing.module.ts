import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from "./app.component";


const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'img',
  loadChildren: () => import('./img-slide/img-slide.module').then(module => module.ImgSlideModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
