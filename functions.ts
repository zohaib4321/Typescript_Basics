// number

let userId: number = 223355

// boolean

let isLoggedIn: boolean = false

function addTwo(num: number): number{
    return num + 2
} 

addTwo(5)

function toUpper(val: string) {
    return val.toUpperCase()
}

toUpper("zohaib")

function signUpUser(name: string, email: string, isPaid: boolean = false) {}

signUpUser("zohaib", "zohaib@gmail.dev")

function getValue(myVal: number) {
    if (myVal > 5) {
        return true
    }
    return "200 Ok"
}

const sayHello = (var2: string): string => {
    return "Hello" + var2
}

const heros = ["thor", "spiderman", "ironman"]
// const heros = [1, 2, 3]

heros.map((hero): string => {
    return `hero is ${hero}`
})

function consoleError(errmsg: string): void {
    console.log(errmsg)    
}

function handleError(errmsg: string): never {
    throw new Error(errmsg)
}


export {}