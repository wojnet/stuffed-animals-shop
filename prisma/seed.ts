import { PrismaClient } from "../generated/prisma/client";
import "dotenv/config";
import { PrismaNeon } from "@prisma/adapter-neon";

const adapter = new PrismaNeon({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({ adapter });

const main = async () => {
  await prisma.orderItem.deleteMany();
  await prisma.order.deleteMany();
  await prisma.address.deleteMany();
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();
  
  const bears = await prisma.category.create({
    data: {
      name: "Misie",
      slug: "misie",
    },
  });

  const bunnies = await prisma.category.create({
    data: {
      name: "Króliki",
      slug: "kroliki",
    },
  });

  await prisma.product.createMany({
    data: [
      {
        name: "Miś Uszatek Brązowy",
        slug: "mis-uszatek-brazowy",
        description: "Klasyczny miś uszatek w brązowym kolorze. Idealny dla małych dzieci.",
        price: 4999,
        stock: 15,
        images: ["brown-bear.jpg"],
        categoryId: bears.id,
      },
      {
        name: "Miś Polarny Biały",
        slug: "mis-polarny-bialy",
        description: "Puszysty miś polarny wykonany z miękkiego materiału.",
        price: 6999,
        stock: 8,
        images: ["polar-bear.jpg"],
        categoryId: bears.id,
      },
      {
        name: "Króliczek Różowy Mały",
        slug: "kroliczek-rozowy-maly",
        description: "Mały różowy króliczek z długimi uszami.",
        price: 3999,
        stock: 20,
        images: ["bunny-pink-small.jpg"],
        categoryId: bunnies.id,
      },
      {
        name: "Króliczek Szary Duży",
        slug: "kroliczek-szary-duzy",
        description: "Duży szary króliczek idealny jako poduszka.",
        price: 7999,
        stock: 5,
        images: ["bunny-gray.jpg"],
        categoryId: bunnies.id,
      },
    ],
  });

  console.log("Seed finished!");
};

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());