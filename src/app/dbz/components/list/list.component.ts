import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {
  @Input()
   public characterList: Character[] = [{
    id: "",
    name: "",
    power: -1
   }]

  // onDeleteID = Index value : number
  @Output()
  public onDelete = new EventEmitter<string>()

  onDeleteCharacter(id: string): void{
    // console.log(this.characterList)
    // this.characterList.splice(index, 1);
    this.onDelete.emit(id)
  }
}
