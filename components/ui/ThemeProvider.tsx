"use client";

import { useEffect } from "react";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = saved ?? (prefersDark ? "dark" : "light");
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, []);

  return <>{children}</>;
};

export default ThemeProvider;