import type { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";

const ADMIN_EMAILS = process.env.ADMIN_EMAILS?.split(",") ?? [];

export default {
  providers: [Google],
  callbacks: {
    signIn({ user }) {
      return ADMIN_EMAILS.includes(user.email ?? "");
    },
  },
  pages: {
    signIn: "/login",
  },
} satisfies NextAuthConfig;