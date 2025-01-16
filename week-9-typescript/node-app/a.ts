const x: number = 101

console.log(x)

function greet(firstname : string){
    console.log("Hello "+firstname )
}
greet("harshad")

function sum(a:number , b:number): number{
    return a+b;
}
console.log(sum(1,2))

function runAfter1s(fn:()=>void){
    setTimeout(fn, 1000);
}

// runAfter1s(()=>{console.log("hi there")})


const great=(name: string)=>`Hello, ${name}`


//interfaces ---------------
interface User{
    firstname:string
    lastname:string
    age:number
    email?:string //optional
}

function isLegal(user:User){
    if(user.age>18) return true;
    else    return false;
}

isLegal({
    firstname:"harsh",
    lastname:"bond",
    age:20
})

let a:number;
let sad:number[]=[1,2,3];
console.log(sad)



function maxvalue(arr: number[]){
    let max=0
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max)
            max=arr[i]
    }
    return max;
}

console.log(maxvalue([1,4,3,2]))
