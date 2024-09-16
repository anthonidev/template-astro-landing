import { create } from "zustand";
interface ThemeColors {
  name: string;
  colors: {
    type: "color" | "number";
    [key: string]: string; // Para permitir otros colores dinámicos
  }[];
}

const defaultTheme: ThemeColors[] = [
  {
    name: "Base Colors",
    colors: [
      { "--color-primary": "#460808", type: "color" },
      { "--color-secondary": "hsl(0, 0%, 94%)", type: "color" },
      { "--color-tertiary": "hsl(220, 16%, 28%)", type: "color" },
    ],
  },
  {
    name: "Text Colors",
    colors: [
      { "--color-text-primary": "#630000", type: "color" },
      { "--color-text-secondary": "rgb(180, 180, 185)", type: "color" },
      { "--color-text-offset": "rgb(35, 43, 53)", type: "color" },
    ],
  },
  {
    name: "Background Colors",
    colors: [
      { "--color-background-primary": "#f0f0d6", type: "color" },
      { "--color-background-secondary": "#f06f66", type: "color" },
      { "--color-background-offset": "#f0e0b7", type: "color" },
    ],
  },
  {
    name: "Utility Colors",
    colors: [
      { "--color-border": "#57423f", type: "color" },
      { "--color-hover": "rgba(255, 202, 84, 0.8)", type: "color" },
      { "--color-active": "rgba(255, 202, 84, 0.6)", type: "color" },
      { "--color-focus": "#ffc254", type: "color" },
      { "--color-disabled": "rgb(255, 255, 255)", type: "color" },
    ],
  },
  {
    name: "Status Colors",
    colors: [
      { "--color-success": "rgb(85, 218, 137)", type: "color" },
      { "--color-error": "rgb(255, 99, 91)", type: "color" },
      { "--color-warning": "rgb(255, 204, 102)", type: "color" },
      { "--color-info": "#85a5ff", type: "color" },
    ],
  },
  {
    name: "Icon Colors",
    colors: [
      { "--color-icon": "rgb(255, 255, 255)", type: "color" },
      { "--color-icon-hover": "rgb(184, 184, 184)", type: "color" },
      { "--color-icon-active": "rgba(194, 133, 0, 0.756)", type: "color" },
    ],
  },
  {
    name: "Shadow y Radius",
    colors: [
      { "--color-box-shadow": "rgba(0, 0, 0, 0.2)", type: "color" },
      { "--border-radius-small": "4px", type: "number" },
      { "--border-radius-medium": "8px", type: "number" },
      { "--border-radius-large": "12px", type: "number" },
    ],
  },
  {
    name: "Gradient",
    colors: [
      {
        "--gradient-primary":
          "linear-gradient(90deg, #f06f66 0%, #f0e0b7 100%)",
        type: "color",
      },
      {
        "--gradient-secondary":
          "linear-gradient(90deg, #f06f66 0%, #f0e0b7 100%)",
        type: "color",
      },
    ],
  },
];

interface ThemeState {
  isOpen: boolean;
  changeTheme: () => void;
  theme: ThemeColors[];
}

const useThemeStore = create<ThemeState>((set, get) => ({
  isOpen: false,
  changeTheme: () => set({ isOpen: !get().isOpen }),
  theme: defaultTheme,
}));

export default useThemeStore;
