import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroNames : string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor']
  public originalSize: number = this.heroNames.length
  public deletedHero: string = "XXXX"

  removeLastHero(): void{
    this.deletedHero = this.heroNames.pop() || ""
  }
}
