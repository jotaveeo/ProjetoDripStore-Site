import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// const create = await prisma.user.create({
//   data: {
//     firstname: "joao",
//     surname: "vitor",
//     email: "joao@gmail.com",
//     password: "1234",
//   },
// });
// console.log(create);

const read = await prisma.user.findUnique({
  where: {
    email: "joao@gmail.com",
  },
});

console.log(read);