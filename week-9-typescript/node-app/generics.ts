// type Input=number | string;

// function firstEl(arr:Input[]){
//     return arr[0]
// }

// const value=firstEl(["harkirat","singh"])


function identity<T>(arg: T){
    return arg;
}

let output1=identity<string>("myString")
let output2=identity<number>(2)
console.log(output1,output2)

function getFirstElement<T>(arr: T[]): T{
    return arr[0]
}