"use strict";
const x = 101;
console.log(x);
function greet(firstname) {
    console.log("Hello " + firstname);
}
greet("harshad");
function sum(a, b) {
    return a + b;
}
console.log(sum(1, 2));
function runAfter1s(fn) {
    setTimeout(fn, 1000);
}
// runAfter1s(()=>{console.log("hi there")})
const great = (name) => `Hello, ${name}`;
function isLegal(user) {
    if (user.age > 18)
        return true;
    else
        return false;
}
isLegal({
    firstname: "harsh",
    lastname: "bond",
    age: 20
});
let a;
let sad = [1, 2, 3];
console.log(sad);
function maxvalue(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max)
            max = arr[i];
    }
    return max;
}
console.log(maxvalue([1, 4, 3, 2]));
