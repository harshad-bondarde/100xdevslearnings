"use strict";
function firstEl(arr) {
    return arr[0];
}
const value = firstEl(["harkirat", "singh"]);
function identity(arg) {
    return arg;
}
let output1 = identity("myString");
let output2 = identity(2);
console.log(output1, output2);
