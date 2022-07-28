import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import {RouterModule} from '@angular/router';
import {StudentService} from './student/student.service';
import {StudenRoutingModule} from './studen-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { EditStudentComponent } from './student/edit-student/edit-student.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    EditStudentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    StudenRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      closeButton: true,
      progressBar: true,
      positionClass:   'toast-top-right',
    }),
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
