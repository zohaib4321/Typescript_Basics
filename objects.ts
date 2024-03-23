// Objects

const user = {
    name: "zohaib",
    email: "zohaib@lco.dev",
    isActive: true
}

function createUser({name: string, isPaid: boolean}) {}

const newUser = {name: "zohaib", isPaid: false, email: "z@z.com"}

createUser(newUser)
// createUser({name: "zohaib", isPaid: false})

function createCourse(): {name: string, price: number}{
    return {name: "reactjs", price: 399}
}

export {}