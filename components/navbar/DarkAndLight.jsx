import React from 'react';
import { useTheme } from 'next-themes';

const DarkAndLight = () => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const { systemTheme, theme, setTheme } = useTheme();

  const renderChangeTheme = () => {
    const currentTheme = theme === 'system' ? systemTheme : theme;

    if (currentTheme === 'dark') {
      return (
        <p
          onClick={() => setTheme('light')}
          className="font-semibold cursor-pointer"
        >
          Light Mode
        </p>
      );
    } else {
      return (
        <p
          onClick={() => setTheme('dark')}
          className="font-semibold cursor-pointer"
        >
          Dark Mode
        </p>
      );
    }
  };
  return <div className="text-main dark:text-white">{renderChangeTheme()}</div>;
};

export default DarkAndLight;
