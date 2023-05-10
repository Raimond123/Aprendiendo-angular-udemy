import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  template: `
      <button (click)="  changeHero(): void{
()"></button>
  `
})

export class HeroComponent {
  public name:string = 'Pitel Parkel'
  public age: number = 18
  public check: boolean = true
  get capitalizedName (): string{
    return this.name.toUpperCase()
  }
  public getHeroDescription(): string{
    return `${this.name} - ${this.age}`
  }
  changeHero(): void{
    this.name = 'spiderman'

  }
  changeAge():void{
    this.age = 19
  }
  resetForm(): void{
    this.name = "Pitel Parker"
    this.age = 18
    // document.querySelectorAll('h1')!.forEach(element => {element.innerHTML = '<h1>desde angular </h1>'})
  }

}
