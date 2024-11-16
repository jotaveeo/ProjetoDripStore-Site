import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Criar categorias
  const electronics = await prisma.category.create({
    data: { name: 'Eletrônicos' },
  });

  const clothing = await prisma.category.create({
    data: { name: 'Roupas' },
  });

  // Criar produto
  const product = await prisma.product.create({
    data: {
      name: 'Smartphone',
      description: 'Smartphone de última geração',
      price: 3999.99,
      categories: {
        create: [
          { categoryId: electronics.id }, // Associar categoria
        ],
      },
    },
  });

  console.log('Produto criado:', product);
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
