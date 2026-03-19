"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "../ThemeToggle";

const HeaderNavigation = () => {
  const pathname = usePathname();

  return (
    <nav className="font-solid flex gap-8 sm:text-lg">
      <Link href="/" className={pathname === "/" ? "nav-link-active" : ""}>HOME</Link>
      <Link href="/products" className={pathname === "/products" ? "nav-link-active" : ""}>PRODUCTS</Link>
      <ThemeToggle />
    </nav>
  );
};

export default HeaderNavigation;