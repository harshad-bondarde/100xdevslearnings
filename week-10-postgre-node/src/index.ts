import { Client } from "pg";//works in ts not in js for js const {Client} =require("pg")

const client=new Client({
    connectionString:"postgresql://test_owner:QkMwqh0JOA2v@ep-steep-mouse-a12orcyq.ap-southeast-1.aws.neon.tech/test?sslmode=require",

})

// const client=new Client({
//     host:'localhost',
//     user:'postgres',
//     port:5432,
//     password:'post',
//     database:'harkirat'
// })

//postgres://postgres:post@5432/harkirat

client.connect()
async function createUsersTable(){
    try{
        const response=await client.query(`
            create table if not exists users(
                id serial PRIMARY KEY,
                username varchar(50) unique not null,
                email varchar(255) unique not null,
                password varchar(255) not null,
                created_at timestamp with time zone default current_timestamp
            )        
        `)
        // console.log(response)
    }catch(e){
        console.log(e)
    }
}

createUsersTable()

console.log('hi')
