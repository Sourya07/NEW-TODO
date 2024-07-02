import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function CrearingUser(userId: number, title: string, description: string) {
  const todo = await prisma.todo.create({
    data: {
      title,
      description,
      userId
    },
  });
  console.log(todo);

}

CrearingUser(1, "priyanshu", "hello there")


async function getTodosAndUserDetails(userId: number, ) {
    const todos = await prisma.todo.findMany({
        where: {
            userId: userId,
        },
        select: {
            user: true,
            title: true,
            description: true
        }
    });
    console.log(todos);
}

getTodosAndUserDetails(1);

async function getUser(id: number) {
  const user = await prisma.user.findFirst({
    where: {
       id : id
    }
  })
  console.log(user);
}

getUser(1);

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