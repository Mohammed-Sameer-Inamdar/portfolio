export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "light-bg": "#ffffff",
        "light-bg-secondary": "#f5f5f5",
        "light-text": "#1a1a1a",
        "light-text-secondary": "#666666",
        "light-border": "#e0e0e0",
        
        // Dark theme colors (existing)
        "dark-bg": "#080a12",
        "dark-bg-secondary": "#111827",
        "dark-text": "#ffffff",
        "dark-text-secondary": "#d1d5db",
        "dark-border": "#1f2937",
        // Light theme colors
        "theme-bg": "var(--bg-primary)",
        "theme-card": "var(--bg-secondary)",
        "theme-text": "var(--text-primary)",
        "theme-text-muted": "var(--text-secondary)",
        "theme-border": "var(--border-color)",
      },
    },
  },
  plugins: [],
}