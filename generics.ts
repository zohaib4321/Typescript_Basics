const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: string | number): string | number {
  return val;
}

function identityTwo(val: any): any {
  return val;
}

function identityThree<Type>(val: Type): Type {
  return val;
}

// identityThree(true)

function identityFour<T>(val: T): T {
  return val;
}


interface Bottle {
  brand: string;
  type: string;
}

// identityFour<Bottle>({})

function getsearchedProducts<Type>(products: Type[]): Type {
  // do some db operation
  let myIndex = 3
  return products[myIndex]
}

const getMoreProducts = <T,>(products: T): T => {
  // do some db operation
  let myIndex = 4
  return products[myIndex]
}

interface Database {
  connection: string;
  username: string;
  password: string;
}

function anotherFunction<T, U extends Database>(valOne: T, valTwo: U): object {
  return {
    valOne,
    valTwo
  }
}

// anotherFunction(3, {})

interface Quiz {
  name: string;
  type: string;
}

interface Course {
  name: string;
  author: string;
  subject: string;
}

class Sellable<T> {
  public cart: T[] = []

  addToCart(product: T){
    this.cart.push(product)
  } 
}
