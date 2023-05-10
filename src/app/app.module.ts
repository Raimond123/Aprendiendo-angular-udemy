import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { CounterModule } from './Counter/Components/counter/Counter.module';
import { picapollo } from './app.component';
import { HeroComponent } from './heroes/hero/hero.component';
import { ListComponent } from './heroes/list/list.component';
@NgModule({
  declarations: [
    picapollo,
    HeroComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModule
  ],
  providers: [],
  bootstrap: [picapollo]
})
export class AppModule { }
