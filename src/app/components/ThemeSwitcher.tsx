import { useTheme } from "next-themes";

export default function ThemeSwitcher() {
  const { setTheme, resolvedTheme } = useTheme();

  const toggleDarkMode = () => {
    if (resolvedTheme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <button type="button" onClick={toggleDarkMode}>
      ThemeSwitcher
    </button>
  );
}
