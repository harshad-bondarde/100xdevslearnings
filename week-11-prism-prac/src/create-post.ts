import { PrismaClient } from "@prisma/client";
import { connect } from "http2";
import { title } from "process";

const prisma=new PrismaClient()

async function main(){
    await prisma.post.create({
        data:{
            title:"title of post",
            content:"asdasd",
            published:true,
            author:{
                connect:{
                    id:1  
                }
            }

            //or just do author=1
        }
    })
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