import type { Prisma } from "@/generated/prisma/client";

export type ProductTileData = Prisma.ProductGetPayload<{
  select: {
    id: true;
    name: true;
    slug: true;
    price: true;
    stock: true;
    images: true;
    category: {
      select: {
        name: true;
        slug: true;
      };
    };
  };
}>;