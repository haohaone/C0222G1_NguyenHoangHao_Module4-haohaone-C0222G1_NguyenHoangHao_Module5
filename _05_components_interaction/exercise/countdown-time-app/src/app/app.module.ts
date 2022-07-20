import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CountdownTimeAppComponent } from './countdown-time-app/countdown-time-app.component';
import {FormsModule} from '@angular/forms';
import { HoursConverterPipe } from './countdown-time-app/hours-converter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CountdownTimeAppComponent,
    HoursConverterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
