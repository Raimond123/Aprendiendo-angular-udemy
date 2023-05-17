import { NgModule } from "@angular/core";
//import { HeroComponent } from "./hero/hero.component";
import { ListComponent } from "./list/list.component";
import { HeroComponent } from "./hero/hero.component";
import { CommonModule } from "@angular/common";

@NgModule({
imports: [CommonModule],

  exports: [
    ListComponent,
    HeroComponent

  ],
  declarations: [
    ListComponent,
    HeroComponent
  ]
})
export class HeroesComponent{ }
//export class HeroesModule{ }

