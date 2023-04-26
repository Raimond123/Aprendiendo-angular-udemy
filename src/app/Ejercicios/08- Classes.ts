export class Person{

  constructor(public name?: string,
  public lastName: string,
  private address: string = 'No address') {
    this.name = name
    this.address = address
  }
}
export class Hero {
  constructor(
    public alterEgo: string,
    public age: number,
    public realName:string
    public person:Person
  ){
  }
}
const tony = new Person('Tony', 'Stark', 'New York')
const ironman = new Hero('Iron man', 45, 'Toni', tony)
console.log(ironman)
