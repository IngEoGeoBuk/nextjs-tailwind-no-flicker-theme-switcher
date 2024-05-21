// https://github.com/pacocoursey/next-themes#readme
// https://www.youtube.com/watch?v=7zqI4qMDdg8&t=438s

// There are flickering when rendering first, u r using useEffect.

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const FlickeringThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  const toggleDarkMode = () => {
    if (resolvedTheme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <p className="text-7xl">Light</p>;
  }

  if (resolvedTheme === "dark") {
    return (
      <button type="button" onClick={toggleDarkMode}>
        <p className="text-7xl">Dark</p>
      </button>
    );
  }

  if (resolvedTheme === "light") {
    return (
      <button type="button" onClick={toggleDarkMode}>
        <p className="text-7xl">Light</p>
      </button>
    );
  }
};

export default FlickeringThemeSwitcher;
