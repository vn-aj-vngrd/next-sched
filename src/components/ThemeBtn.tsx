import { useTheme } from "next-themes";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useEffect, useState } from "react";

const ToggleTheme = () => {
  const {systemTheme, theme, setTheme} = useTheme();
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = (checked: boolean) => {
    setDarkMode(checked);
  };

  useEffect(() => {}, [isDarkMode]);

  return (
    <DarkModeSwitch
      checked={isDarkMode}
      onChange={toggleDarkMode}
      size={24}
      className="dark:text-white"
    />
  );
};

export default ToggleTheme;
