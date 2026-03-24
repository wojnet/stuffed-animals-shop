"use client";

import { useCartStore } from "@/store/cart";
import Button from "@/components/ui/Button";
import type { ProductTileData } from "@/types";

interface AddToCartButtonProps {
  product: ProductTileData;
}

const AddToCartButton = ({ product }: AddToCartButtonProps) => {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <Button
      size="xs"
      variant="slim"
      onClick={() => addItem(product)}
    >
      ADD TO CART
    </Button>
  );
};

export default AddToCartButton;