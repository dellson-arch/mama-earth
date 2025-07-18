import React, { createContext, useState, useEffect, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Initialize from localStorage or system preference
    const savedTheme = localStorage.getItem('theme');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (systemDark ? 'dark' : 'light');
    
    // Apply to DOM and state
    applyTheme(initialTheme);
    setTheme(initialTheme);
  }, []);

  const applyTheme = (theme) => {
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    root.style.colorScheme = theme;
    localStorage.setItem('theme', theme);
    
    // Force all components to update
    document.querySelectorAll('[data-theme]').forEach(el => {
      el.dataset.theme = theme;
    });
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    applyTheme(newTheme);
    setTheme(newTheme);
    
    // Force React components to update
    window.dispatchEvent(new CustomEvent('themechange', {
      detail: { theme: newTheme }
    }));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};