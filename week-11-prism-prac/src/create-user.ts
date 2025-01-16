import { PrismaClient } from "@prisma/client";

const prisma=new PrismaClient()

// async function main(){
//     const response=await prisma.user.create({
//         data:{
//             email:"harshadb1212121212@gmail.com",
//             name:"harshad bond"
//         }
//     })

//     console.log(response)
// }

async function main(){
    const response=await prisma.user.create({
        data:{
            email:"abc@gmail.com",
            name:"aaaaaaaa",
            posts:{
                create:[
                    {
                        title:"title1"
                    },
                    {
                        title:"title2"
                    }
                ]
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