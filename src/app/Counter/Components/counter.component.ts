// import { Component } from '@angular/core';
// @Component({
//   selector: 'app-counter',
//   template: '<h1>Hola counter</h1>'
// })
// export class counterComponent{

// }
import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3> {{counter}} </h3>
    <button (click)="increaseBy(-1)">-1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="increaseBy(1)">+1</button>
  `

})

export class counterComponent {
  constructor() { }
  public counter:number = 10
  increaseBy(num: number): void{
    this.counter += num
  }
  resetCounter(){
    this.counter = 10
  }

}
