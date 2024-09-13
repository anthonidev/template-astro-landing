import useThemeStore from "@/context/theme-store";

const ButtonTheme = () => {
  const { changeTheme, isOpen } = useThemeStore();
  return (
    <button
      className="fixed right-5 top-20 rounded-xl bg-secondary px-4 py-1 font-bold text-primary"
      onClick={changeTheme}
    >
      {isOpen ? "Close" : "Open"} Theme
    </button>
  );
};

export default ButtonTheme;
