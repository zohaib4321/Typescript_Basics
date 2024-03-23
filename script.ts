// // @**********************Type aliases*******************************

// type User = {
// 	username: string;
// 	email: string;
// 	isAdmin: boolean;
// };

// function createUser(user: User): User {
//   return {username: "", email: "", isAdmin: false}
// }

// example

// type Point = {
//   x: number;
//   y: number;
// };

// function printCoord(point: Point) {
//   console.log("The coordinate's x value is " + point.x);
//   console.log("The coordinate's y value is " + point.y); 
// }

// printCoord({x: 100, y: 100})


// type User = {
//   readonly _id: string;
// 	username: string;
// 	email: string;
// 	isAdmin: boolean;
//   creditCardDetails?: number;
// };

// const myUser: User = {
//   _id: "1234",
//   username: "",
//   email: "",
//   isAdmin: false
// }

// myUser.username = "changeable"
// myUser._id = "" // it gives error when I want to change

// type CardNumber = {
//   cardNumber: string
// }
// type CardDate = {
//   cardDate: string
// }

// type CardDetails = CardNumber & CardDate & {
//   cardExpiry: Date
// }

// // @****************************** Unions****************************

// let score: number | string = 33

// score = "33"


// type User = {
//   id: number
//   name: string
// }

// type Admin = {
//   id: number
//   username: string
// }

// let yourName: User | Admin = { name: "chai", id: 1234 }
// yourName = {username: "tea", id: 1234}


// function getDbId(id: number | string) {
//   console.log(`DB id is ${id}`);
// }

// getDbId(3)
// getDbId("34")

// function getDbId(id: number | string) {
//   if (typeof id === "string") {
//     id.toLowerCase()
//   }
// }


// arrays

// const data: number[] = [1, 2, 3]
// const data2: string[] = ["1", "2", "3"]
// const data3: (string | number)[] = ["1", "2", 3]


// let seatAllotment: "aisle" | "middle" | "window";

// seatAllotment = "window"
// seatAllotment = "crew" // does not allow to do this

// // @***************************Tuples********************************

// const user: [number, string, boolean] = [1234, "chai", true]

// const rgb: [number, number, number] = [255, 131, 190]

// type User = [string, number]

// const newUser: User = ["chai", 120]

// // newUser[0] = 90 // it does not allow
// newUser.push(123) // it allows to push


// // @************************Interfaces******************************

// interface User {
//   readonly _id: string
//   name: string;
//   userId: number;
//   googleId?: string;
//   // startTrial: () => string
//   startTrial(): string;
//   getCoupon(couponName: string, value: number): number
// }

// interface User {
//   githubToken: string
// }

// interface Admin extends User{
//   role: "admin" | "client"
// }

// let user: Admin = { 
//   _id: "2", 
//   name: "chai", 
//   userId: 1122, 
//   githubToken: "github",
//   role: "admin",
//   startTrial: () => {
//     return "Trial started"
//   },
//   getCoupon: (name: "cup", off: 10) => {
//     return 10
//   }
// }

// // @*************************Public/Private*************************

// class User {
//   public name: string;
//   private email: string;
//   readonly city: string = 'lahore'
//   constructor(name: string, email: string){
//     this.name = name
//     this.email = email
//   }
// }

// class User {

//   readonly city: string = 'lahore'
//   constructor(
//     public name: string, 
//     private email: string,
//     // userId: string

//     ){
//   }
// }

// const user = new User("chai", "chai@chai.com")
// // user.email

// // @*********************Getter/Setter*******************************

// class User {

//   // private _courseCount = 1;
//   protected _courseCount = 1;

//   readonly city: string = 'lahore'
//   constructor(
//     public name: string, 
//     private email: string,
//     // userId: string

//     ){
//   }

//   private deleteToken(){
//     console.log("Token deleted");
//   }

//   get getAppleEmail(): string {
//     return `apple${this.email}`
//   }

//   get courseCount(): number {
//     return this._courseCount;
//   }

//   set courseCount(courseNum) {
//     if (courseNum <= 1) {
//       throw new Error("Course count should be more than one")
//     }
//     this._courseCount = courseNum;
//   }
// }

// class SubUser extends User{
//   isFamily: boolean = true
//   changeCourseCount(){
//     this._courseCount = 4
//   }
// }

// const user = new User("chai", "chai@chai.com")
// // user.email
// // user.deleteToken














export {}