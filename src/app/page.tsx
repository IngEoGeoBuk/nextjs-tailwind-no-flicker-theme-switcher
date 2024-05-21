"use client";

import FlickeringThemeSwitcher from "./components/FlickeringThemeSwitcher";
import NoFlickeringThemeSwitcher from "./components/NoFlickeringThemeSwitcher";

export default function HomePage() {
  return (
    <div className="h-96 bg-slate-100 dark:bg-slate-900">
      <p className="text-slate-950 dark:text-slate-50">Theme Switcher</p>
      <br />
      <br />
      <div className="flex gap-20">
        <div>
          <h2>Flickering using UseEffect</h2>
          <br />
          <FlickeringThemeSwitcher />
        </div>
        <div>
          <h2>No Flickering using css option</h2>
          <br />
          <NoFlickeringThemeSwitcher />
        </div>
      </div>
    </div>
  );
}
