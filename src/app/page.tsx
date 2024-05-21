"use client";

import ThemeSwitcher from "./components/ThemeSwitcher";

export default function HomePage() {
  return (
    <div className="h-96 bg-slate-100 dark:bg-slate-900">
      <p className="text-slate-950 dark:text-slate-50">dark flickering</p>
      <br />
      <ThemeSwitcher />
    </div>
  );
}
