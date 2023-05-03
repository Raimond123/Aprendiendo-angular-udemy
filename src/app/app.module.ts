import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { picapollo } from './app.component';
import { counterComponent } from './Counter/counter.component';

@NgModule({
  declarations: [
    picapollo,
    counterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [picapollo]
})
export class AppModule { }
