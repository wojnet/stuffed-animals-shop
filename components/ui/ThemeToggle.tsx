"use client";

import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button type="button" onClick={toggle} className="font-solid text:lg sm:text-xl cursor-pointer">
      {dark ? "🌙" : "☀️"}
    </button>
  );
};

export default ThemeToggle;