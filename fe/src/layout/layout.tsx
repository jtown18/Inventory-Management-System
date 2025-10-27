import { useState, useEffect } from "react";
import {
  Box,
  Breadcrumbs,
  CssBaseline,
  Link as MuiLink,
  Typography,
} from "@mui/material";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { useCustomTheme } from "../theme/CustomThemeProvider";
import SidebarDrawer from "./sidebarDrawer";
import AppHeader from "./appHeader";
import menuItems from "./menuItems";

const Layout = () => {
  const location = useLocation();
  const { darkMode, toggleDarkMode } = useCustomTheme();
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState<Record<string, boolean>>(() =>
    JSON.parse(localStorage.getItem("submenuOpen") || "{}")
  );

  const toggleDrawer = () => setIsDrawerOpen((prev) => !prev);
  const toggleSubmenu = (label: string) => {
    const updated = { ...submenuOpen, [label]: !submenuOpen[label] };
    localStorage.setItem("submenuOpen", JSON.stringify(updated));
    setSubmenuOpen(updated);
  };

  const currentRoute = menuItems.find(
    (item) => item.path === location.pathname
  );
  const pageTitle = currentRoute?.label || "Home";

  useEffect(() => {
    document.title = `${pageTitle} | Inventory Management System`;
  }, [pageTitle]);

  const pathnames = location.pathname.split("/").filter(Boolean);

  return (
    <>
      <CssBaseline />
      <Box sx={{ display: "flex", minHeight: "100vh" }}>
        <SidebarDrawer
          isOpen={isDrawerOpen}
          toggleDrawer={toggleDrawer}
          submenuOpen={submenuOpen}
          toggleSubmenu={toggleSubmenu}
        />

        <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
          <Box
            component="header"
            sx={{
              height: "64px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              px: 3,
            }}
          >
            <AppHeader darkMode={darkMode} onToggleTheme={toggleDarkMode} />
          </Box>

          <Box sx={{ px: 3, py: 2, flexGrow: 1 }}>
            <Breadcrumbs sx={{ mb: 1 }}>
              <MuiLink
                component={NavLink}
                to="/"
                color="inherit"
                underline="hover"
              >
                Home
              </MuiLink>
              {pathnames.map((value, index) => {
                const to = `/${pathnames.slice(0, index + 1).join("/")}`;
                const match = menuItems.find((item) => item.path === to);
                return (
                  <MuiLink
                    key={to}
                    component={NavLink}
                    to={to}
                    underline="hover"
                    color="inherit"
                  >
                    {match?.label || value}
                  </MuiLink>
                );
              })}
            </Breadcrumbs>

            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              {pageTitle}
            </Typography>

            <Outlet />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Layout;
