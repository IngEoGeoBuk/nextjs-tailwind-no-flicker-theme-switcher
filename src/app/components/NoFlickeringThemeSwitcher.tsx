// Just use css option hide and block

import { useTheme } from "next-themes";

export default function NoFlickeringThemeSwitcher() {
  const { setTheme, resolvedTheme } = useTheme();

  const toggleDarkMode = () => {
    if (resolvedTheme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <div>
      <button type="button" onClick={toggleDarkMode}>
        <p className="hidden dark:block text-7xl">Dark</p>
        <p className="dark:hidden text-7xl">Light</p>
      </button>
    </div>
  );
}
