/*
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
    interface Reproductor {
      volumen: number
      songDuration: number
      cancion: string
      detalles: Detalles
    }

    interface Detalles{
      autor: string
      year: number
    }
    const reproductor: Reproductor = {
      volumen: 90,
      songDuration: 36,
      cancion: 'Mess',
      detalles: {
        autor: 'Ed Sheeran',
        year: 2015
      }
   }
   const cancion = "New song"

   const { cancion:anotherSong,
    songDuration:duration,
    detalles
  } = reproductor
  const {
    autor: author,
    year: Year
  } = detalles

  /* const{
    song: anotherSong,
    songDuration: duration
    details: {autor} = reproductor
    console.log("El volumen actual de: ", reproductor.volumen)
    console.log("Duration: ", duration)
    console.log("La cancion actual de: ", anotherSong)
    console.log("Author: ", author)
    console.log("Year ", Year)
   }
   ngOnInit(): void {
   }
 }
*/


/*
/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class picapollo implements OnInit{
  public title:string = "nueva app"
  public edad = 18.5

  constructor(){

    interface Product{
      price: number;
      description:string;
    }

    const phone: Product = {
      description: 'Nokia A1',
      price: 150.0
    }
    const tablet: Product = {
      description: "Ipad Air",
      price: 250,
    }

    interface TaxCalculationOptions{
      tax: number,
      products: Product[],
    }

    function taxCalculation(options: TaxCalculationOptions): number[]{
      let total = 0
      options.products.forEach(product => {
        let price = product.price
        total += price
      })
      let tax = options.tax
      return[total, total * options.tax]
    }

    const shoppingCart = [phone, tablet]
    const tax = 0.15
    const result = taxCalculation({
      products: shoppingCart,
      tax
    })

    console.log("total", result[0])
    console.log("Tax", result[1])
  }

   /*console.log("El volumen actual de: ", reproductor.volumen)
   console.log("Duration: ", duration)
   console.log("La cancion actual de: ", anotherSong)
   console.log("Author: ", author)
   console.log("Year ", Y
  }
  ngOnInit(): void {
  }
}


*/




export interface Product{
  price: number;
  description:string;
}

const phone: Product = {
  description: 'Nokia A1',
  price: 150.0
}
const tablet: Product = {
  description: "Ipad Air",
  price: 250,
}

interface TaxCalculationOptions{
  tax: number,
  products: Product[],
}

export function taxCalculation(options: TaxCalculationOptions): [number, number]{
  const {tax, products} = options
  let total = 0
  products.forEach(({price}) => {
    total += price
  })
  return[total, total * tax]
}


const shoppingCart = [phone, tablet]
const tax = 0.15
const result = taxCalculation({
  products: shoppingCart,
  tax
})

const [Total, taxTotal] = taxCalculation({
  products: shoppingCart,
  tax: tax
})
console.log("total", result[0])
console.log("Tax", result[1])







/* import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class picapollo implements OnInit{
  public title:string = "nueva app"
  public edad = 18.5

  constructor(){

    interface Product{
      price: number;
      description:string;
    }

    const phone: Product = {
      description: 'Nokia A1',
      price: 150.0
    }
    const tablet: Product = {
      description: "Ipad Air",
      price: 250,
    }

    interface TaxCalculationOptions{
      tax: number,
      products: Product[],
    }

    function taxCalculation(options: TaxCalculationOptions): [number, number]{
      const {tax, products} = options
      let total = 0
      products.forEach(({price}) => {
        total += price
      })
      return[total, total * tax]
    }


    const shoppingCart = [phone, tablet]
    const tax = 0.15
    const result = taxCalculation({
      products: shoppingCart,
      tax
    })

    const [Total, taxTotal] = taxCalculation({
      products: shoppingCart,
      tax: tax
    })
    console.log("total", result[0])
    console.log("Tax", result[1])
  }

  ngOnInit(): void {
  }
}
*/
