import { PrismaClient } from "@prisma/client";
import { connect } from "http2";
import { title } from "process";

const prisma=new PrismaClient()

async function main(){
    const response=await prisma.user.findMany({
        where:{
            email:{
                endsWith:"gmail.com"
            },
            posts:{
                some:{
                    published:true
                }
            }
        },
        include:{
            posts:{
                where:{
                    published:true
                }
            }
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