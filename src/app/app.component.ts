import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class picapollo implements OnInit{
  public title:string = "Hola Mundo"
  public counter: number = 10
  public edad = 18.5
 

  constructor(){
    interface Passenger{
      name: string
      children?: string[]
    }
      const passenger1: Passenger = {
        name: 'Yo'
      }

      const passenger2: Passenger = {
        name: 'Melissa',
        children: ['Natalia', 'Elizabeth']
      }

    const returnChildrenNumber = (passenger: Passenger) : number => {
      if(!passenger.children )
        return 0
      const howManyChildren = passenger.children!.length
      console.error(passenger.name + ' Tiene ' + howManyChildren + ' hijos')
      return howManyChildren
    }
    returnChildrenNumber(passenger1)

  }


  ngOnInit(): void {
  }
}
