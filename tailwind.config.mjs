/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter Variable", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        tertiary: "var(--color-tertiary)",

        "text-primary": "var(--color-text-primary)",
        "text-secondary": "var(--color-text-secondary)",
        "text-offset": "var(--color-text-offset)",

        "background-primary": "var(--color-background-primary)",
        "background-secondary": "var(--color-background-secondary)",
        "background-offset": "var(--color-background-offset)",

        border: "var(--color-border)",
        hover: "var(--color-hover)",
        active: "var(--color-active)",

        success: "var(--color-success)",
        error: "var(--color-error)",
        warning: "var(--color-warning)",
      },
      textColor: {
        primary: "var(--color-text-primary)",
        secondary: "var(--color-text-secondary)",
        offset: "var(--color-text-offset)",
      },
      backgroundColor: {
        primary: "var(--color-background-primary)",
        secondary: "var(--color-background-secondary)",
        offset: "var(--color-background-offset)",
      },
      borderColor: {
        primary: "var(--color-border)",
      },
      borderRadius: {
        sm: "var(--border-radius-sm)",
        md: "var(--border-radius-md)",
        lg: "var(--border-radius-lg)",
      },
      spacing: {
        xs: "var(--spacing-xs)",
        sm: "var(--spacing-sm)",
        md: "var(--spacing-md)",
        lg: "var(--spacing-lg)",
        xl: "var(--spacing-xl)",
      },
      maxWidth: {
        container: "var(--max-width)",
      },
      height: {
        button: "var(--button-height)",
        input: "var(--input-height)",
        navbar: "var(--navbar-height)",
      },
    },
  },
  corePlugins: {
    fontSize: false, // Puedes deshabilitar más plugins si no los necesitas
  },
  plugins: [],
};
