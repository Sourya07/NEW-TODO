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
function CrearingUser(userId, title, description) {
    return __awaiter(this, void 0, void 0, function* () {
        const todo = yield prisma.todo.create({
            data: {
                title,
                description,
                userId
            },
        });
        console.log(todo);
    });
}
CrearingUser(1, "priyanshu", "hello there");
// import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient();
// async function getTodosAndUserDetails(userId: number, ) {
//     const todos = await prisma.todo.findMany({
//         where: {
//             userId: userId,
//         },
//         select: {
//             user: true,
//             title: true,
//             description: true
//         }
//     });
//     console.log(todos);
// }
// getTodosAndUserDetails(1);
// async function getUser(id: number) {
//   const user = await prisma.user.findFirst({
//     where: {
//        id : id
//     }
//   })
//   console.log(user);
// }
// getUser(12);
// async function insertUser(username: string, password: string,  name: string) {
//   const res = await prisma.user.create({
//     data: {
//         username,
//         password,
//         name
//     }
//   })
//   console.log(res);
// }
// insertUser("admin2", "123456", "priyanshu")
