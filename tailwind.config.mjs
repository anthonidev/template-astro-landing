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
        focus: "var(--color-focus)",
        disabled: "var(--color-disabled)",

        success: "var(--color-success)",
        error: "var(--color-error)",
        warning: "var(--color-warning)",
        info: "var(--color-info)",

        icon: "var(--color-icon)",
        "icon-hover": "var(--color-icon-hover)",
        "icon-active": "var(--color-icon-active)",
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
      boxShadow: {
        custom: "0 2px 4px var(--color-box-shadow)", // Sombra personalizada
      },
      borderRadius: {
        sm: "var(--border-radius-small)",
        lg: "var(--border-radius-large)",
      },
      opacity: {
        default: "var(--opacity-default)",
        hover: "var(--opacity-hover)",
        disabled: "var(--opacity-disabled)",
      },
      gradientColorStops: {
        primary: "var(--gradient-primary)",
        secondary: "var(--gradient-secondary)",
      },
    },
  },
  corePlugins: {
    fontSize: false, // Puedes deshabilitar más plugins si no los necesitas
  },
  plugins: [],
};
