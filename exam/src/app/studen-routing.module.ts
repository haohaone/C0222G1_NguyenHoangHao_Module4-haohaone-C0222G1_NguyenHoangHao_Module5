import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {StudentComponent} from './student/student.component';
import {EditStudentComponent} from './student/edit-student/edit-student.component';

const routes: Routes = [
  {path: '', component: StudentComponent},
  {path: './:toast/:id', component: StudentComponent},
  {path: 'edit/:id', component: EditStudentComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class StudenRoutingModule {
}
