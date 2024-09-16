import { Dialog } from "@headlessui/react";
import { motion, AnimatePresence } from "framer-motion";
import useThemeStore from "@/context/theme-store";
import {
  backdropVariants,
  sidebarVariants,
} from "@/animations/sidebarAnimations";
import ThemeEditor from "@/components/shared/ThemeEdit";
import { Icon } from "@iconify/react";
const Sidebar = () => {
  const { changeTheme, isOpen } = useThemeStore();

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog
          open={isOpen}
          onClose={() => changeTheme()}
          className="fixed inset-0 z-50"
        >
          {/* Fondo oscuro animado con motion.div */}
          <motion.div
            className="fixed inset-0 bg-black"
            initial="closed"
            animate="open"
            exit="closed"
            variants={backdropVariants}
            onClick={() => changeTheme()}
          />

          {/* Sidebar con animación de entrada y salida */}

          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={sidebarVariants}
            className="fixed left-0 top-0 h-full w-[90%] overflow-y-auto bg-white p-4 shadow-lg sm:w-1/2"
          >
            <div className="mb-4 flex items-center justify-between">
              <h2 className="font-bold" style={{ fontSize: "1.5rem" }}>
                Colores
              </h2>

              <button onClick={() => changeTheme()}>
                <Icon
                  icon="material-symbols-light:tab-close-sharp"
                  className="h-10 w-10"
                />
              </button>
            </div>
            <span className="text-secondary" style={{ fontSize: "1rem" }}>
              Selecciona un color para cambiar el tema de la aplicación
            </span>
            <ThemeEditor />
          </motion.div>
        </Dialog>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
