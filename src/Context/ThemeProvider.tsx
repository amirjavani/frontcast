import { createContext, ReactNode, useContext, useEffect, useState } from "react";

export type Theme = "dark" | "light";

export interface ThemeContextType {
  theme: Theme;
  changeTheme: (theme: Theme) => void;
}

const themeContext = createContext<ThemeContextType | undefined>(undefined);
function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(
    (localStorage.getItem("theme") as Theme) || "light"
  );

  useEffect(() => {
    localStorage.setItem('theme',theme)
  }, [theme]);

  const changeTheme = (theme: Theme) => {
    setTheme(theme);
  };

  return (
    <themeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </themeContext.Provider>
  );
}


export const useThemeContext=()=>{
    const context = useContext(themeContext);
    if (!context) {
      throw new Error("useThemeContext must be used within a ThemeProvider");
    }
    return context;
}

export default ThemeProvider;
