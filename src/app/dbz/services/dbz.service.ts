import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})

export class DbzService {

  public characters: Character[] = [{
    name: "Krilin",
    power: 1000
  },{
    name: 'Goku',
    power: 10000
  },{
    name: "Nappa",
    power: 8000
  }];

  onNewCharacter(character: Character): void {
    this.characters.push(character)
  }

  onDeleteCharacter(indx: number){
    console.log(indx)
    this.characters.splice(indx, 1)
  }

  constructor() { }

}
