import { useState, useEffect } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
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
    <div
      className={cn(
        "flex min-h-screen transition-colors duration-300",
        darkMode ? "bg-gray-900" : "bg-gray-50"
      )}
    >
      <SidebarDrawer
        isOpen={isDrawerOpen}
        toggleDrawer={toggleDrawer}
        submenuOpen={submenuOpen}
        toggleSubmenu={toggleSubmenu}
        darkMode={darkMode}
      />

      <div className="flex-1 flex flex-col">
        <AppHeader darkMode={darkMode} onToggleTheme={toggleDarkMode} />

        {/* Main Content */}
        <main
          className={cn(
            "flex-1 px-6 py-4 transition-colors duration-300",
            darkMode ? "bg-gray-900" : "bg-gray-50"
          )}
        >
          {/* Breadcrumbs */}
          <div className="mb-2">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink
                    asChild
                    className={cn(
                      "transition-colors duration-200",
                      darkMode
                        ? "text-gray-300 hover:text-white"
                        : "text-gray-600 hover:text-gray-900"
                    )}
                  >
                    <NavLink to="/">Home</NavLink>
                  </BreadcrumbLink>
                </BreadcrumbItem>

                {pathnames.map((value, index) => {
                  const to = `/${pathnames.slice(0, index + 1).join("/")}`;
                  const match = menuItems.find((item) => item.path === to);
                  const isLast = index === pathnames.length - 1;

                  return (
                    <div key={to} className="flex items-center">
                      <BreadcrumbSeparator
                        className={cn(
                          "transition-colors duration-200",
                          darkMode ? "text-gray-500" : "text-gray-400"
                        )}
                      />
                      <BreadcrumbItem>
                        {isLast ? (
                          <BreadcrumbPage
                            className={cn(
                              "transition-colors duration-200",
                              darkMode ? "text-gray-200" : "text-gray-900"
                            )}
                          >
                            {match?.label || value}
                          </BreadcrumbPage>
                        ) : (
                          <BreadcrumbLink
                            asChild
                            className={cn(
                              "transition-colors duration-200",
                              darkMode
                                ? "text-gray-300 hover:text-white"
                                : "text-gray-600 hover:text-gray-900"
                            )}
                          >
                            <NavLink to={to}>{match?.label || value}</NavLink>
                          </BreadcrumbLink>
                        )}
                      </BreadcrumbItem>
                    </div>
                  );
                })}
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          {/* Page Title */}
          <h1
            className={cn(
              "text-2xl font-semibold mb-6 transition-colors duration-300",
              darkMode ? "text-white" : "text-gray-900"
            )}
          >
            {pageTitle}
          </h1>

          {/* Page Content */}
          <div
            className={cn(
              "transition-colors duration-300",
              darkMode ? "text-gray-100" : "text-gray-900"
            )}
          >
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
