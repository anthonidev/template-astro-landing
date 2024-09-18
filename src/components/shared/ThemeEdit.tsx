import useThemeStore from "@/context/theme-store";
import { useState, type ChangeEvent, useEffect } from "react";

// Define la estructura de los colores
interface ThemeColors {
  [key: string]: string; // Para permitir otros colores dinámicos
}

const ThemeEditor: React.FC = () => {
  const { theme, applyChanges } = useThemeStore();

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "var(--color-background-primary)",
      }}
      className="flex flex-col gap-4"
    >
      {/* {Object.keys(selectedColors).map((colorKey) => (
        <div
          key={colorKey}
          className="mb-4 flex items-start justify-between rounded-lg border bg-white p-4"
        >
          <label className="text-xl capitalize text-secondary">
            {colorKey.replace(/([A-Z])/g, " $1")}
          </label>
          <input
            type="color"
            value={selectedColors[colorKey]}
            className="h-10 w-10 rounded-full"
            onChange={(e) => handleColorChange(e, colorKey)}
          />
        </div>
      ))} */}
      {theme.map(({ colors, name }) => (
        <>
          <h2>{name}</h2>
          {colors.map((color) => (
            <div
              key={Object.keys(color)[0]}
              className="mb-4 flex items-start justify-between rounded-lg border bg-white p-4"
            >
              <label className="text-xl capitalize text-secondary">
                {Object.keys(color)[0].replace(/([A-Z])/g, " $1")}
              </label>
              <input
                type={color.type}
                value={Object.values(color)[0]}
                className="h-10 w-10 rounded-full"
                onChange={(e) =>
                  useThemeStore
                    .getState()
                    .changeColor(Object.keys(color)[0], e.target.value)
                }
              />
            </div>
          ))}
        </>
      ))}

      <button
        onClick={applyChanges}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "var(--color-hover)",
          border: "none",
          cursor: "pointer",
        }}
      >
        Aplicar Cambios
      </button>
    </div>
  );
};

export default ThemeEditor;
