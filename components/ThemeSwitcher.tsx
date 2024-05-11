"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const themeCheck = theme === "light" ? "dark" : "light";

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  return (
    <div>
      <button onClick={() => setTheme(themeCheck)}>
        {" "}
        <MdOutlineLightMode className="text-red-500" />
      </button>
    </div>
  );
};

export default ThemeSwitcher;
