"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const ModeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Wait until the component is mounted to avoid hydration errors
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded text-white"
      aria-label="Toggle theme"
    >
      {theme === "light" ? "🌞 Light Mode" : "🌜 Dark Mode"}
    </button>
  );
};

export default ModeToggle;
