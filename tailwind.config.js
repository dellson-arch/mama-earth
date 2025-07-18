module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: 'var(--color-text-primary)',
          dark: 'var(--color-text-primary)',
        },
      },
    },
  },
}