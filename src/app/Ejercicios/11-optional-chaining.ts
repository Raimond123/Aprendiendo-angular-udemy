export interface Passenger{
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

const printChildren = (passenger: Passenger) => {
  const howManyChildren = passenger2.children?.length
  console.log(howManyChildren)
}
