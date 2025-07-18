// src/components/ThemeWrapper.jsx
import { useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeWrapper({ children }) {
  const { theme } = useTheme();

  useEffect(() => {
    // Force update on theme change
    const handler = () => window.dispatchEvent(new Event('resize'));
    window.addEventListener('themechange', handler);
    return () => window.removeEventListener('themechange', handler);
  }, []);

  return (
    <div data-theme={theme} key={theme}>
      {children}
    </div>
  );
}