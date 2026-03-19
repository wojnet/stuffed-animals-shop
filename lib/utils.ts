import { twMerge } from "tailwind-merge";

export function cn(...classes: string[]) {
  return twMerge(...classes);
}

export const formatPrice = (priceInGrosze: number): string => {
  return new Intl.NumberFormat("pl-PL", {
    style: "currency",
    currency: "PLN",
  }).format(priceInGrosze / 100);
}

export const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-");
}