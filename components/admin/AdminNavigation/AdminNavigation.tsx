"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import LogoutButton from "../LogoutButton";

const AdminNavigation = () => {
  const pathname = usePathname();

  return (
    <nav className="h-[calc(100vh-96px)] w-40 flex flex-col gap-2 sm:text-lg p-5 sticky top-24 shrink-0">
      <Link
        href="/admin"
      >
        {pathname === "/admin" ? ">" : ""} HOME
      </Link>
      <Link
        href="/admin/products"
      >
        {pathname === "/admin/products" ? ">" : ""} PRODUCTS
      </Link>
      <Link
        href="/admin/orders"
      >
        {pathname === "/admin/orders" ? ">" : ""} ORDERS
      </Link>
      <div
        className="grow"
      />
      <LogoutButton />
    </nav>
  );
};

export default AdminNavigation;