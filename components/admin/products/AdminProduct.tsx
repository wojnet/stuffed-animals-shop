"use client";
import { formatPrice } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import type { Product, Category } from "@/generated/prisma/client";
import Button from "@/components/ui/Button";

export type AdminProductData = Product & {
  category: Category;
};

interface AdminProductProps {
  product: AdminProductData;
}

const AdminProduct = ({ product }: AdminProductProps) => {
  return (
    <div
      className="w-full h-14 sm:h-20 flex justify-start items-center gap-5 font-sans shadow-md p-2 rounded-xl border border-foreground"
    >
      <Link
        href={`/admin/products/${product.slug}`}
        className="w-10 h-10 sm:w-16 sm:h-16 relative aspect-square border border-foreground rounded-md"
      >
        <Image
          src={`https://stuffed-animals-shop.s3.eu-central-1.amazonaws.com/${product.images[0]}`}
          fill
          alt={product.name}
          className="object-cover object-center rounded-md"
        />
      </Link>
      <h3 className="text-xs sm:text-sm w-24 sm:w-36">
        {product.name}
      </h3>
      <p className="italic text-sm w-16 sm:w-24">
        {formatPrice(product.price)}
      </p>
      <p className="italic text-sm hidden lg:w-52 lg:block line-clamp-3">
        {product.description}
      </p>
      <div className="grow flex justify-end p-4 gap-2">
        <Link
          href={`/admin/products/${product.slug}`}
          className="text-sm"
        >
          <Button
            variant="slim"
            size="sm"
          >
            Edit
          </Button>
        </Link>
        <Button
          variant="slim"
          size="sm"
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default AdminProduct;