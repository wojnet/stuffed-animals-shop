"use client";
import { formatPrice } from "@/lib/utils";
import type { ProductTileData } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface ProductTileProps {
  product: ProductTileData;
}

const ProductTile = ({ product }: ProductTileProps) => {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="flex flex-col gap-3"
    >
      <div className="relative aspect-3/4 w-full">
        <Image
          src={`https://stuffed-animals-shop.s3.eu-central-1.amazonaws.com/${product.images[0]}`}
          fill
          alt={product.name}
          className="object-cover rounded-2xl"
        />
      </div>
      <div>
        <h3 className="font-bold">
          {product.name.toUpperCase()}
        </h3>
        <p className="italic">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  );
};

export default ProductTile;