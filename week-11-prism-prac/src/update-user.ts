import { PrismaClient } from "@prisma/client";
import { connect } from "http2";
import { title } from "process";

const prisma=new PrismaClient()

async function main(){
    
    const response=await prisma.user.update({
        where:{
            id:1
        },
        data:{
            name:"harkirat"
        }
    })

    console.log(response)
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