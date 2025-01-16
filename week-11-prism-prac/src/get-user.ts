import { PrismaClient } from "@prisma/client";
import { connect } from "http2";
import { title } from "process";

const prisma=new PrismaClient()

async function main(){
    // const users=await prisma.user.findMany({})   // to get list of all users
    // console.log(users)
    //returns array 


    // const user=await prisma.user.findUnique({  //find user with id 1 and include his posts too
    //     where:{
    //         id:1
    //     },
    //     include:{
    //         posts:true
    //     }
    // })
    // console.log(user)




}


main()
    .then(async ()=>{
        console.log("done")
        await prisma.$disconnect()
    })
    .catch(async (e)=>{
        console.log(e)
        await prisma.$disconnect()
    })