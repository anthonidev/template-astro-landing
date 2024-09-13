import { create } from "zustand";

interface ThemeState {
  isOpen: boolean;
  changeTheme: () => void;
}

const useThemeStore = create<ThemeState>((set, get) => ({
  isOpen: false,
  changeTheme: () => set({ isOpen: !get().isOpen }),
}));

export default useThemeStore;
