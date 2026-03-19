"use client";
import { signOut } from "next-auth/react";
import Button from "@/components/ui/Button";

const LogoutButton = () => {
  return (
    <Button size="sm" onClick={() => signOut({ callbackUrl: "/" })}>
      Logout
    </Button>
  );
};

export default LogoutButton;