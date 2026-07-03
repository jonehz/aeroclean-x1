"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Đợi client mount xong mới render icon
  if (!mounted) {
    return (
      <button
        aria-label="Toggle theme"
        className="
          rounded-full
          p-2
          transition
          hover:bg-slate-100
        "
      >
        <div className="h-[18px] w-[18px]" />
      </button>
    );
  }

  return (
    <button
      aria-label="Toggle theme"
      className="
        rounded-full
        p-2
        transition
        hover:bg-slate-100
      "
      onClick={() =>
        setTheme(theme === "dark" ? "light" : "dark")
      }
    >
      {theme === "dark" ? (
        <Sun size={18} />
      ) : (
        <Moon size={18} />
      )}
    </button>
  );
}