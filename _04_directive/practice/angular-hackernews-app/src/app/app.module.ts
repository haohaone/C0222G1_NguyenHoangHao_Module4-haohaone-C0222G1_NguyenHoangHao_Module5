import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import {FormsModule} from "@angular/forms";
import { Like1Component } from './like1/like1.component';
import { HeaderComponent } from './header/header.component';
import { FooderComponent } from './fooder/fooder.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    Like1Component,
    HeaderComponent,
    FooderComponent
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
