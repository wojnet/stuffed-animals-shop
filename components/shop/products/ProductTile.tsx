"use client";
import { formatPrice } from "@/lib/utils";
import type { ProductTileData } from "@/types";
import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "./AddToCartButton";

interface ProductTileProps {
  product: ProductTileData;
}

const ProductTile = ({ product }: ProductTileProps) => {
  return (
    <div
      className="flex flex-col gap-3"
    >
      <Link
        href={`/products/${product.slug}`}
        className="relative aspect-3/4 w-full"
      >
        <Image
          src={`https://stuffed-animals-shop.s3.eu-central-1.amazonaws.com/${product.images[0]}`}
          fill
          alt={product.name}
          className="object-cover rounded-2xl"
        />
      </Link>
      <div className="flex justify-between items-end">
        <div>
          <Link
            href={`/products/${product.slug}`}
            className="font-bold"
          >
            {product.name.toUpperCase()}
          </Link>
          <p className="italic">
            {formatPrice(product.price)}
          </p>
        </div>
        <AddToCartButton
          product={product}
        />
      </div>
    </div>
  );
};

export default ProductTile;