"use client";

import Button from "@/components/ui/Button";
import { formatPrice } from "@/lib/utils";
import { useCartStore } from "@/store/cart";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  const items = useCartStore((state) => state.items);
  const removeItem = useCartStore((state) => state.removeItem);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const clearCart = useCartStore((state) => state.clearCart);
  const totalPrice = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  if (items.length === 0) {
    return (
      <main className="flex-1 flex flex-col items-center justify-center gap-6">
        <h1 className="font-sketch text-4xl">Koszyk jest pusty</h1>
        <Link href="/products">
          <Button>Wróć do sklepu</Button>
        </Link>
      </main>
    );
  }

  return (
    <main className="max-w-3xl mx-auto px-4 py-10 flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <h1 className="font-sketch text-4xl">Koszyk</h1>
        <button
          onClick={clearCart}
          className="font-solid text-sm underline cursor-pointer"
        >
          Wyczyść
        </button>
      </div>

      <div className="flex flex-col gap-4">
        {items.map((item) => (
          <div
            key={item.product.id}
            className="flex gap-4 items-center border-b-2 border-foreground/20 pb-4"
          >
            <div className="relative w-20 h-20 shrink-0">
              <Image
                src={`https://stuffed-animals-shop.s3.eu-central-1.amazonaws.com/${item.product.images[0]}`}
                fill
                alt={item.product.name}
                className="object-cover rounded-lg"
              />
            </div>

            <div className="flex-1">
              <p className="font-solid">{item.product.name}</p>
              <p className="font-sans text-sm text-foreground/60">
                {item.product.category.name}
              </p>
              <p className="font-solid text-sm">
                {formatPrice(item.product.price * item.quantity)}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() =>
                  item.quantity === 1
                    ? removeItem(item.product.id)
                    : updateQuantity(item.product.id, item.quantity - 1)
                }
                className="font-solid w-7 h-7 border-2 border-foreground flex items-center justify-center cursor-pointer rounded-md"
              >
                -
              </button>
              <span className="font-solid w-6 text-center">
                {item.quantity}
              </span>
              <button
                type="button"
                onClick={() =>
                  updateQuantity(item.product.id, item.quantity + 1)
                }
                className="font-solid w-7 h-7 border-2 border-foreground flex items-center justify-center cursor-pointer rounded-md"
              >
                +
              </button>
            </div>

            <button
              type="button"
              onClick={() => removeItem(item.product.id)}
              className="font-solid text-sm cursor-pointer ml-2"
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-4 border-t-2 border-foreground pt-6">
        <div className="flex justify-between font-solid text-2xl">
          <span>Razem:</span>
          <span>{formatPrice(totalPrice())}</span>
        </div>
        <Link href="/checkout">
          <Button className="w-full">
            Przejdź do zamówienia
          </Button>
        </Link>
      </div>
    </main>
  );
};

export default Page;