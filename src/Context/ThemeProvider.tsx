import { createContext, ReactNode, useContext, useState } from "react";

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
    return useContext(themeContext)
}

export default ThemeProvider;
