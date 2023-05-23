import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { CounterModule } from './Counter/Components/counter/Counter.module';
import { picapollo } from './app.component';
//import { HeroesModule } from './heroes/heroes.module';
//import { HeroComponent } from './heroes/hero/hero.component';
//import { ListComponent } from './heroes/list/list.component';
import {HeroesComponent } from './heroes/heroes.module';
import { DbzModule } from './dbz/dbz.module';

@NgModule({
  declarations: [
    picapollo
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeroesComponent,
    CounterModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [picapollo]
})
export class AppModule { }
