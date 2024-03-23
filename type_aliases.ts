// // @**********************Type aliases*******************************

type User = {
	username: string;
	email: string;
	isAdmin: boolean;
};

function createUser(user: User): User {
  return {username: "", email: "", isAdmin: false}
}

// example

type Point = {
  x: number;
  y: number;
};

function printCoord(point: Point) {
  console.log("The coordinate's x value is " + point.x);
  console.log("The coordinate's y value is " + point.y); 
}

printCoord({x: 100, y: 100})


type User = {
  readonly _id: string;
	username: string;
	email: string;
	isAdmin: boolean;
  creditCardDetails?: number;
};

const myUser: User = {
  _id: "1234",
  username: "",
  email: "",
  isAdmin: false
}

myUser.username = "changeable"
myUser._id = "" // it gives error when I want to change

type CardNumber = {
  cardNumber: string
}
type CardDate = {
  cardDate: string
}

type CardDetails = CardNumber & CardDate & {
  cardExpiry: Date
}