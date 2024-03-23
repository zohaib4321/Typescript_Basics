"use strict";
// number
Object.defineProperty(exports, "__esModule", { value: true });
var userId = 223355;
// boolean
var isLoggedIn = false;
function addTwo(num) {
    return num + 2;
}
addTwo(5);
function toUpper(val) {
    return val.toUpperCase();
}
toUpper("zohaib");
function signUpUser(name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
}
signUpUser("zohaib", "zohaib@gmail.dev");
function getValue(myVal) {
    if (myVal > 5) {
        return true;
    }
    return "200 Ok";
}
var sayHello = function (var2) {
    return "Hello" + var2;
};
var heros = ["thor", "spiderman", "ironman"];
// const heros = [1, 2, 3]
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
