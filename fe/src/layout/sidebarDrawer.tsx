import React from "react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import menuItems from "./menuItems";
import logoImage from "../public/logo.png";
import logoImageWhite from "../public/logo-white.png";

interface SidebarDrawerProps {
  isOpen: boolean;
  submenuOpen: Record<string, boolean>;
  toggleSubmenu: (label: string) => void;
  toggleDrawer: () => void;
  darkMode: boolean;
}

const SidebarDrawer: React.FC<SidebarDrawerProps> = ({
  isOpen,
  submenuOpen,
  toggleSubmenu,
  toggleDrawer,
  darkMode,
}) => {
  return (
    <div
      className={cn(
        "flex flex-col h-screen border-r transition-all duration-300 overflow-hidden",
        isOpen ? "w-[200px]" : "w-[60px]",
        darkMode ? "bg-gray-900 border-gray-700" : "bg-white border-gray-200"
      )}
    >
      <div className="flex-1 overflow-y-auto overflow-x-hidden">
        {/* Header with Logo */}
        <div
          className={cn(
            "flex items-center mt-1 mb-1",
            isOpen ? "ml-4 justify-start" : "justify-center"
          )}
        >
          <img
            src={darkMode ? logoImageWhite : logoImage}
            alt="Logo"
            className={cn(
              "object-contain",
              isOpen ? "w-8 h-8 mr-2" : "w-8 h-8"
            )}
          />
          {isOpen && (
            <h1
              className={cn(
                "text-lg font-bold whitespace-nowrap",
                darkMode ? "text-white" : "text-gray-900"
              )}
            >
              IMS
            </h1>
          )}
        </div>

        {/* Navigation Menu */}
        <nav className="space-y-1 px-2">
          <TooltipProvider>
            {menuItems.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <Collapsible open={submenuOpen[item.label]}>
                    <CollapsibleTrigger asChild>
                      <Button
                        variant="ghost"
                        onClick={() => toggleSubmenu(item.label)}
                        className={cn(
                          "w-full h-auto py-2 rounded-md transition-colors",
                          isOpen
                            ? "justify-start px-3"
                            : "justify-center px-0 aspect-square h-10 w-10 mx-auto",
                          darkMode
                            ? "text-gray-200 hover:bg-gray-800 hover:text-white"
                            : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        )}
                      >
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <div
                              className={cn(
                                "flex items-center",
                                isOpen ? "min-w-[40px]" : "justify-center",
                                darkMode ? "text-gray-300" : "text-gray-600"
                              )}
                            >
                              {item.icon}
                            </div>
                          </TooltipTrigger>
                          {!isOpen && (
                            <TooltipContent side="right">
                              <p>{item.label}</p>
                            </TooltipContent>
                          )}
                        </Tooltip>
                        {isOpen && (
                          <>
                            <span className="text-sm flex-1 text-left">
                              {item.label}
                            </span>
                            <div
                              className={cn(
                                "ml-auto",
                                darkMode ? "text-gray-300" : "text-gray-600"
                              )}
                            >
                              {submenuOpen[item.label] ? (
                                <ChevronUp className="h-4 w-4" />
                              ) : (
                                <ChevronDown className="h-4 w-4" />
                              )}
                            </div>
                          </>
                        )}
                      </Button>
                    </CollapsibleTrigger>
                    {isOpen && (
                      <CollapsibleContent>
                        <div className="space-y-1">
                          {item.children.map((child) => (
                            <NavLink
                              key={child.label}
                              to={child.path || ""}
                              className={({ isActive }) =>
                                cn(
                                  "flex items-center py-2 pl-6 mx-1 my-1 rounded-md text-sm transition-colors",
                                  darkMode
                                    ? "text-gray-300 hover:bg-gray-800 hover:text-white"
                                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900",
                                  isActive &&
                                    (darkMode
                                      ? "bg-gray-800 text-white"
                                      : "bg-gray-100 text-gray-900")
                                )
                              }
                            >
                              <div
                                className={cn(
                                  "flex items-center min-w-[40px]",
                                  darkMode ? "text-gray-300" : "text-gray-600"
                                )}
                              >
                                {child.icon}
                              </div>
                              <span>{child.label}</span>
                            </NavLink>
                          ))}
                        </div>
                      </CollapsibleContent>
                    )}
                  </Collapsible>
                ) : (
                  <NavLink
                    to={item.path || ""}
                    className={({ isActive }) =>
                      cn(
                        "flex items-center py-2 rounded-md transition-colors",
                        isOpen
                          ? "justify-start px-3"
                          : "justify-center px-0 aspect-square h-10 w-10 mx-auto",
                        darkMode
                          ? "text-gray-200 hover:bg-gray-800 hover:text-white"
                          : "text-gray-700 hover:bg-gray-100 hover:text-gray-900",
                        isActive &&
                          (darkMode
                            ? "bg-gray-800 text-white"
                            : "bg-gray-100 text-gray-900")
                      )
                    }
                  >
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div
                          className={cn(
                            "flex items-center",
                            isOpen ? "min-w-[40px]" : "justify-center",
                            darkMode ? "text-gray-300" : "text-gray-600"
                          )}
                        >
                          {item.icon}
                        </div>
                      </TooltipTrigger>
                      {!isOpen && (
                        <TooltipContent side="right">
                          <p>{item.label}</p>
                        </TooltipContent>
                      )}
                    </Tooltip>
                    {isOpen && <span className="text-sm">{item.label}</span>}
                  </NavLink>
                )}
              </div>
            ))}
          </TooltipProvider>
        </nav>
      </div>

      <Separator
        className={cn(
          "border",
          darkMode ? "border-gray-700" : "border-gray-200"
        )}
      />

      {/* Collapse/Expand Button at Bottom */}
      <div className="p-2">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              onClick={toggleDrawer}
              className={cn(
                "w-full py-2 rounded-md transition-colors",
                isOpen
                  ? "justify-center px-3"
                  : "justify-center px-0 aspect-square h-10 w-10 mx-auto",
                darkMode
                  ? "text-gray-300 hover:bg-gray-800 hover:text-white"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              )}
            >
              {isOpen ? (
                <ChevronLeft className="h-4 w-4" />
              ) : (
                <ChevronRight className="h-4 w-4" />
              )}
            </Button>
          </TooltipTrigger>
          <TooltipContent side={isOpen ? "bottom" : "right"}>
            <p>{isOpen ? "Collapse Sidebar" : "Expand Sidebar"}</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </div>
  );
};

export default SidebarDrawer;
