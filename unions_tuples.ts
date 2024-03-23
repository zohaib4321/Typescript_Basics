// @****************************** Unions****************************

let score: number | string = 33

score = "33"


type User = {
  id: number
  name: string
}

type Admin = {
  id: number
  username: string
}

let yourName: User | Admin = { name: "chai", id: 1234 }
yourName = {username: "tea", id: 1234}


function getDbId(id: number | string) {
  console.log(`DB id is ${id}`);
}

getDbId(3)
getDbId("34")

function getDbId(id: number | string) {
  if (typeof id === "string") {
    id.toLowerCase()
  }
}


// arrays

const data: number[] = [1, 2, 3]
const data2: string[] = ["1", "2", "3"]
const data3: (string | number)[] = ["1", "2", 3]


let seatAllotment: "aisle" | "middle" | "window";

seatAllotment = "window"
// seatAllotment = "crew" // does not allow to do this

// @***************************Tuples********************************

const user: [number, string, boolean] = [1234, "chai", true]

const rgb: [number, number, number] = [255, 131, 190]

type User = [string, number]

const newUser: User = ["chai", 120]

// newUser[0] = 90 // it does not allow
// newUser.push(123) // it allows to push
