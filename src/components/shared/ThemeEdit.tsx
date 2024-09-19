import { Disclosure } from "@headlessui/react";
import { motion } from "framer-motion";
import useThemeStore from "@/context/theme-store";
import InputColor from "./inputs/InputColor";
import InputNumber from "./inputs/InputNumber";

const ThemeEditor: React.FC = () => {
  const { theme } = useThemeStore();

  return (
    <div
      style={{
        padding: "20px 10px",
        backgroundColor: "white",
      }}
    >
      {theme.map(({ colors, name }) => (
        <Disclosure key={name}>
          {({ open }) => (
            <div className="mb-8 rounded-md bg-black/10 p-3">
              <Disclosure.Button className="text-2xl flex w-full justify-between rounded-md bg-primary px-4 py-2 text-left font-bold text-white">
                <span>{name}</span>
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: open ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  ▼
                </motion.div>
              </Disclosure.Button>

              <Disclosure.Panel
                as={motion.div}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
                className="overflow-hidden"
              >
                <motion.div
                  className="mt-4 grid grid-cols-2 gap-x-5 gap-y-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: open ? 1 : 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  {colors.map((color) => (
                    <div
                      key={Object.keys(color)[0]}
                      className="mb-4 flex flex-col rounded-lg border bg-white p-4"
                    >
                      <label className="text-xl capitalize text-secondary">
                        {Object.keys(color)[0].replace(/([A-Z])/g, " $1")}
                      </label>
                      {color.type === "color" ? (
                        <InputColor
                          value={Object.values(color)[0]}
                          onChange={(e) =>
                            useThemeStore
                              .getState()
                              .changeColor(
                                Object.keys(color)[0],
                                e.target.value,
                              )
                          }
                        />
                      ) : (
                        <InputNumber
                          value={Object.values(color)[0]}
                          onChange={(e) =>
                            useThemeStore
                              .getState()
                              .changeColor(
                                Object.keys(color)[0],
                                e.target.value,
                              )
                          }
                        />
                      )}
                    </div>
                  ))}
                </motion.div>
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
      ))}
    </div>
  );
};

export default ThemeEditor;
