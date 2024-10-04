/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scan all files in the src directory
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F9A826",      // Primary brand color
        secondary: "#141414",    // Dark secondary color
        accent: "#10B981",       // Accent color (for buttons, highlights)
        neutral: "#F3F4F6",      // Neutral background color
        dark: "#1F2937",         // Darker background, card, or navbar color
        light: "#FFFFFF",        // Light background or text color
        warning: "#F59E0B",      // For alerts, warnings
        danger: "#EF4444",       // For errors or danger alerts
        info: "#3B82F6",         // For informational or links
        success: "#22C55E",      // For success messages or positive feedback
      },
    },
  },
  plugins: [],
};
