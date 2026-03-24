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
          className="object-cover object-center rounded-md hover:opacity-70 transition-opacity"
        />
      </Link>
      <Link
        href={`/admin/products/${product.slug}`}
        className="font-medium text-xs sm:text-sm w-24 sm:w-36 hover:opacity-70 transition-opacity"
      >
        {product.name}
      </Link>
      <p className="text-sm w-16 sm:w-24">
        {product.category.name}
      </p>
      <p className="italic text-sm w-16 sm:w-24">
        {formatPrice(product.price)}
      </p>
      <p className="italic text-sm hidden xl:block xl:w-72 line-clamp-3">
        {product.description}
      </p>
      <p className="italic text-sm hidden lg:w-20 lg:block">
        {product.createdAt.toLocaleDateString()}
      </p>
      <div className="flex grow justify-end p-4 gap-2">
        <Link
          href={`/admin/products/${product.slug}`}
          className="text-sm"
        >
          <Button
            variant="slim"
            size="xs"
            className="bg-emerald-300 font-bold hover:translate-0 hover:opacity-70"
          >
            Edit
          </Button>
        </Link>
        <Button
          variant="slim"
          size="xs"
          className="bg-rose-300 font-bold hover:translate-0 hover:opacity-70"
        >
          Delete
        </Button>
        <Button
          variant="slim"
          size="xs"
          className="bg-blue-300 font-bold hover:translate-0 hover:opacity-70"
        >
          Clone
        </Button>
      </div>
    </div>
  );
};

export default AdminProduct;