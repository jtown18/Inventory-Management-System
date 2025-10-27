import React, { useMemo, useState, createContext, useContext } from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

interface ThemeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useCustomTheme = () => {
  const context = useContext(ThemeContext);
  if (!context)
    throw new Error("useCustomTheme must be used within CustomThemeProvider");
  return context;
};

const CustomThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  const theme = useMemo(() => {
    const isDark = darkMode;
    return createTheme({
      palette: {
        mode: isDark ? "dark" : "light",
        ...(isDark
          ? {
              background: {
                default: "#1e1e2f",
                paper: "#252538",
              },
              primary: {
                main: "#2074d4",
              },
              text: {
                primary: "#ffffff",
                secondary: "#b0b0c3",
              },
            }
          : {
              text: {
                primary: "#4C4E64",
              },
            }),
      },
      components: {
        MuiDrawer: {
          styleOverrides: {
            paper: {
              backgroundColor: isDark ? "#1e1e2f" : undefined,
              color: isDark ? "#ffffff" : undefined,
            },
          },
        },
        MuiListItem: {
          styleOverrides: {
            root: {
              borderRadius: 6,
              margin: "4px 8px",
              "&.Mui-selected": {
                backgroundColor: isDark
                  ? "#2c2c3e !important"
                  : "#d0e1ff !important",
                color: isDark ? "#ffffff" : "#4C4E64 !important",
              },
              "&:hover": {
                backgroundColor: isDark ? "#2c2c3e" : "#f5f5f5",
              },
              "&.active": {
                color: isDark ? "#ffffff" : "#4C4E64 !important",
              },
            },
          },
        },
      },
    });
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default CustomThemeProvider;
