import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProgressBarngComponent } from './progress-barng/progress-barng.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgressBarngComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
