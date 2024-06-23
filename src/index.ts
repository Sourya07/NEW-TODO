import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(username: string, password: string, name: string ) {
  const res = await prisma.user.create({
    data: {
        username,
        password,
     name
       
    }
  })
  console.log(res);
}

insertUser("admin2", "123456", "harkirat")