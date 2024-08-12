import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
interface ThemeStore {
  theme: "sl-theme-light" | "sl-theme-dark";
  toggleTheme: () => void;
  changeTheme: (theme: "sl-theme-dark" | "sl-theme-light") => void;
}
export const useTheme = create(
  persist<ThemeStore>(
    (set, get) => ({
      theme: "sl-theme-dark",
      toggleTheme: () =>
        set((state: { theme: string }) => ({
          theme:
            state.theme === "sl-theme-dark"
              ? "sl-theme-light"
              : "sl-theme-dark",
        })),
      changeTheme: (theme: "sl-theme-dark" | "sl-theme-light") =>
        set({ theme }),
    }),
    { name: "theme-storage", storage: createJSONStorage(() => localStorage) }
  )
);
