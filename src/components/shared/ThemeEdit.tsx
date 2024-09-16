import { useState, type ChangeEvent, useEffect } from "react";

// Define la estructura de los colores
interface ThemeColors {
  [key: string]: string; // Para permitir otros colores dinámicos
}

const ThemeEditor: React.FC = () => {
  // Estado para los colores seleccionados pero aún no aplicados
  const [selectedColors, setSelectedColors] = useState<ThemeColors>({
    primary: "#460808",
    secondary: "hsl(0, 0%, 94%)",
    tertiary: "hsl(220, 16%, 28%)",
    textPrimary: "#630000",
    textSecondary: "rgb(180, 180, 185)",
    textOffset: "rgb(35, 43, 53)",
    backgroundPrimary: "#f0f0d6",
    backgroundSecondary: "#f06f66",
    backgroundOffset: "#f0e0b7",
    border: "#57423f",
    hover: "rgba(255, 202, 84, 0.8)",
    active: "rgba(255, 202, 84, 0.6)",
    success: "rgb(85, 218, 137)",
    error: "rgb(255, 99, 91)",
    warning: "rgb(255, 204, 102)",
    icon: "rgb(255, 255, 255)",
    iconHover: "rgb(184, 184, 184)",
    iconActive: "rgba(194, 133, 0, 0.756)",
  });

  // Estado para los colores aplicados actualmente
  const [appliedColors, setAppliedColors] =
    useState<ThemeColors>(selectedColors);

  // Cargar colores del localStorage o del archivo CSS
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedColors = localStorage.getItem("themeColors");
      if (storedColors) {
        const parsedColors = JSON.parse(storedColors);
        setSelectedColors(parsedColors);
        setAppliedColors(parsedColors);
        Object.keys(parsedColors).forEach((colorKey) => {
          document.documentElement.style.setProperty(
            `--color-${colorKey.replace(/([A-Z])/g, "-$1").toLowerCase()}`,
            parsedColors[colorKey],
          );
        });
      }
    }
  }, []);

  // Guardar colores en localStorage cuando cambian
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("themeColors", JSON.stringify(selectedColors));
    }
  }, [selectedColors]);

  // Función para manejar el cambio de color
  const handleColorChange = (
    event: ChangeEvent<HTMLInputElement>,
    colorKey: string,
  ) => {
    const newColor = event.target.value;
    setSelectedColors((prevColors) => ({
      ...prevColors,
      [colorKey]: newColor,
    }));
  };

  // Función para aplicar los cambios al hacer clic en "Aplicar Cambios"
  const applyChanges = () => {
    Object.keys(selectedColors).forEach((colorKey) => {
      document.documentElement.style.setProperty(
        `--color-${colorKey.replace(/([A-Z])/g, "-$1").toLowerCase()}`,
        selectedColors[colorKey],
      );
    });
    setAppliedColors(selectedColors);

    // Forzar repintado agregando y quitando una clase al <html>
    document.documentElement.classList.add("theme-updated");
    setTimeout(() => {
      document.documentElement.classList.remove("theme-updated");
    }, 100);
  };

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "var(--color-background-primary)",
      }}
      className="grid grid-cols-3 gap-4"
    >
      {Object.keys(selectedColors).map((colorKey) => (
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
