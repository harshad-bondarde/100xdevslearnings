"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg"); //works in ts not in js for js const {Client} =require("pg")
const client = new pg_1.Client({
    connectionString: "postgresql://test_owner:QkMwqh0JOA2v@ep-steep-mouse-a12orcyq.ap-southeast-1.aws.neon.tech/test?sslmode=require",
});
// const client=new Client({
//     host:'localhost',
//     user:'postgres',
//     port:5432,
//     password:'post',
//     database:'harkirat'
// })
//postgres://postgres:post@5432/harkirat
client.connect();
function createUsersTable() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield client.query(`
            create table if not exists users(
                id serial PRIMARY KEY,
                username varchar(50) unique not null,
                email varchar(255) unique not null,
                password varchar(255) not null,
                created_at timestamp with time zone default current_timestamp
            )        
        `);
            // console.log(response)
        }
        catch (e) {
            console.log(e);
        }
    });
}
createUsersTable();
console.log('hi');
