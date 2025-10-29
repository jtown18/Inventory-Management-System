import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Moon, Sun, Bell, User } from "lucide-react";

interface AppHeaderProps {
  darkMode: boolean;
  onToggleTheme: () => void;
}

const AppHeader: React.FC<AppHeaderProps> = ({ darkMode, onToggleTheme }) => {
  const isAuthenticated = true;

  return (
    <div className="flex items-center justify-end h-16 px-6 w-full">
      <div className="flex items-center gap-2">
        <TooltipProvider>
          {/* Theme Toggle Button */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                onClick={onToggleTheme}
                className={cn(
                  "transition-colors duration-200",
                  darkMode
                    ? "text-gray-300 hover:text-white hover:bg-gray-700"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                )}
              >
                {darkMode ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Toggle {darkMode ? "Light" : "Dark"} Mode</p>
            </TooltipContent>
          </Tooltip>

          {/* Notifications Button */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className={cn(
                  "relative transition-colors duration-200",
                  darkMode
                    ? "text-gray-300 hover:text-white hover:bg-gray-700"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                )}
              >
                <Bell className="h-5 w-5" />
                {/* Notification Badge */}
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Notifications</p>
            </TooltipContent>
          </Tooltip>

          {/* User Avatar & Menu */}
          {isAuthenticated && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className={cn(
                    "relative p-1 rounded-full transition-colors duration-200",
                    darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
                  )}
                >
                  <div className="relative">
                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        src="https://i.pravatar.cc/300"
                        alt="User Avatar"
                      />
                      <AvatarFallback
                        className={cn(
                          "transition-colors duration-200",
                          darkMode
                            ? "bg-gray-700 text-gray-200"
                            : "bg-gray-200 text-gray-700"
                        )}
                      >
                        <User className="h-4 w-4" />
                      </AvatarFallback>
                    </Avatar>
                    {/* Online Status Indicator */}
                    <div
                      className={cn(
                        "absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 transition-colors duration-200",
                        "bg-green-500",
                        darkMode ? "border-gray-800" : "border-white"
                      )}
                    />
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className={cn(
                  "w-56 transition-colors duration-200",
                  darkMode
                    ? "bg-gray-800 border-gray-700"
                    : "bg-white border-gray-200"
                )}
              >
                <DropdownMenuItem
                  className={cn(
                    "transition-colors duration-200 cursor-pointer",
                    darkMode
                      ? "text-gray-200 hover:bg-gray-700 hover:text-white focus:bg-gray-700"
                      : "text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100"
                  )}
                >
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  className={cn(
                    "transition-colors duration-200 cursor-pointer",
                    darkMode
                      ? "text-gray-200 hover:bg-gray-700 hover:text-white focus:bg-gray-700"
                      : "text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100"
                  )}
                  onClick={() => {
                    // Handle logout
                    console.log("Logout clicked");
                  }}
                >
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </TooltipProvider>
      </div>
    </div>
  );
};

export default AppHeader;
