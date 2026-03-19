"use client";

import Link from "next/link";
import LogoutButton from "../LogoutButton";

const AdminNavigation = () => {
  return (
    <nav className="h-[calc(100vh-96px)] w-40 flex flex-col gap-2 sm:text-lg p-5 sticky top-0 shrink-0">
      <Link href="/admin">
        🏠 HOME
      </Link>
      <Link href="/admin/products">
        🧸 PRODUCTS
      </Link>
      <Link href="/admin/orders">
        📦 ORDERS
      </Link>
      <div
        className="grow"
      />
      <LogoutButton />
    </nav>
  );
};

export default AdminNavigation;