// @************************Interfaces******************************

interface User {
  readonly _id: string
  name: string;
  userId: number;
  googleId?: string;
  // startTrial: () => string
  startTrial(): string;
  getCoupon(couponName: string, value: number): number
}

interface User {
  githubToken: string
}

interface Admin extends User{
  role: "admin" | "client"
}

let user: Admin = { 
  _id: "2", 
  name: "chai", 
  userId: 1122, 
  githubToken: "github",
  role: "admin",
  startTrial: () => {
    return "Trial started"
  },
  getCoupon: (name: "cup", off: 10) => {
    return 10
  }
}
