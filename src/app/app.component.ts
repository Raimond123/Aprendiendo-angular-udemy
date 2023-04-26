import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class picapollo implements OnInit{
  public title:string = "nueva app"
  public edad = 18.5

  constructor(){
    function classDecorator<T extends {new (...args:any[]) : {}}>(
      constructor: T
    ){
      return class extends constructor{
        newProperty = 'New Property'
        hello = "override"
      }
    }

    @classDecorator
    class SuperClass {
      public myProperty: string = 'Abc123'

      print(){
        console.log('Hola mundo')
      }
    }

    console.log(SuperClass)

    const myClass = new SuperClass()
    console.log(myClass)
  }


  ngOnInit(): void {
  }
}
