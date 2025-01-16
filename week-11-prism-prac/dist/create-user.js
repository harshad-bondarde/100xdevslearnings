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
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// async function main(){
//     const response=await prisma.user.create({
//         data:{
//             email:"harshadb1212121212@gmail.com",
//             name:"harshad bond"
//         }
//     })
//     console.log(response)
// }
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield prisma.user.create({
            data: {
                email: "abc@gmail.com",
                name: "aaaaaaaa",
                posts: {
                    create: [
                        {
                            title: "title1"
                        },
                        {
                            title: "title2"
                        }
                    ]
                }
            }
        });
        console.log(response);
    });
}
main()
    .then(() => __awaiter(void 0, void 0, void 0, function* () {
    console.log("done");
    yield prisma.$disconnect();
}))
    .catch((e) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(e);
    yield prisma.$disconnect();
}));
