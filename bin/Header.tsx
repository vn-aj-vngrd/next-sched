import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Link from "next/link";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const Header = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navigations = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
  ];

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <DarkModeSwitch
          checked={true}
          onChange={() => setTheme("light")}
          size={20}
        />
      );
    } else {
      return (
        <DarkModeSwitch
          checked={false}
          onChange={() => setTheme("dark")}
          size={20}
        />
      );
    }
  };

  return (
    <header className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold text-gray-900">sched.</h1>
        <div>
          <div className="hidden md:flex space-x-12">
            {navigations.map((nav, index) => (
              <Link key={index} href={nav.path}>
                <a className="font-medium text-gray-900 hover:text-gray-500">
                  {nav.label}
                </a>
              </Link>
            ))}
          </div>
        </div>
        {renderThemeChanger()}
      </div>
    </header>
  );
};

export default Header;
