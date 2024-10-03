/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#71e60b',             // Main primary color
        'primary-dark': '#00a93b',      // Darker primary color
        'gray-60': '#131517',           // Background color
        'gray-50': '#1c1e20',           // Card background color
        'gray-40': '#2c2e30',           // Subcard background color
        'gray-30': '#7b7d85',           // Mid-gray for text or other elements
        'gray-20': '#b1b2b5',           // Lighter gray for borders or accents
        'gray-10': '#b7b7b8',           // Lightest gray, likely for alternative text
        danger: '#e65244',              // Danger/alert color (e.g., error states)
        success: '#49d793',             // Success color (e.g., for positive states)
        warning: '#fc8802',             // Warning color
        info: '#59b9e2',                // Info color
        accent: '#a599c6',              // Accent color (purple-ish)
      },
    },
  },
  plugins: [],
};
