// interface Person {
//     name:string;
//     age:number;
//     greet(phrase: string):void;
// }

// class Employee implements Person {
//     name:string;
//     age:number;

//     constructor(a:string, n:number){
//         this.name=a;
//         this.age=n;
//     }
//     greet(phrase:string):void{
//         console.log(`${phrase} , i am ${this.name} and I am ${this.age}`)
//     };
// }


//---------------types-------------------------------------------

type Users = {
    firstname:string;
    lastname:string;
    age:number
}

type GreetArg= number | string | boolean
function greet1(id:GreetArg){

}
greet1(1)
greet1("3") //both are valid 

type Employee={
    name:string;
    startDate:Date;
}

type Manager={
    name:string;
    department:string;
}

type TeamLead=Employee & Manager;

const teamLead:TeamLead ={
    name:"harshad",
    startDate:new Date(),
    department:"Software Developement"
}

console.log(teamLead)
