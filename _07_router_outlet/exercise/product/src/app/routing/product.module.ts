import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductRoutingModule} from './product-routing.module';
import {RouterModule, Routes} from '@angular/router';
import {ProductListComponent} from '../product/product-list/product-list.component';
import {ProductCreateComponent} from '../product/product-create/product-create.component';
import {ProductEditComponent} from '../product/product-edit/product-edit.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/product/list'
  },
  {
    path: 'product/list',
    component: ProductListComponent
  },
  {
    path: 'product/create',
    component: ProductCreateComponent
  },
  {
    path: 'product/edit/:id',
    component: ProductEditComponent
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductRoutingModule,
    RouterModule.forRoot(routes)
  ]
})
export class ProductModule {
}
