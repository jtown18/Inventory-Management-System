import React, { useState } from "react";
import {
  Box,
  IconButton,
  Tooltip,
  Avatar,
  Badge,
  Menu,
  MenuItem,
} from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

interface AppHeaderProps {
  darkMode: boolean;
  onToggleTheme: () => void;
}

const AppHeader: React.FC<AppHeaderProps> = ({ darkMode, onToggleTheme }) => {
  //   const { isAuthenticated } = useAuth();
  // const { logout } = useAuth();
  const isAuthenticated = true;
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleAvatarClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        height: "64px",
        px: 3,
        width: "100%",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Tooltip title="Toggle Dark Mode">
          <IconButton onClick={onToggleTheme} color="inherit">
            {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
        </Tooltip>

        <Tooltip title="Notifications">
          <IconButton color="inherit">
            <NotificationsNoneIcon />
          </IconButton>
        </Tooltip>

        {isAuthenticated && (
          <>
            <IconButton onClick={handleAvatarClick}>
              <Badge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
                color="success"
              >
                <Avatar
                  alt="User"
                  src="https://i.pravatar.cc/300"
                  sx={{ width: 36, height: 36 }}
                />
              </Badge>
            </IconButton>
            <Menu
              slotProps={{ paper: { sx: { width: 200 } } }}
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
            >
              <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
              {/* <MenuItem onClick={logout}>Logout</MenuItem> */}
            </Menu>
          </>
        )}
      </Box>
    </Box>
  );
};

export default AppHeader;
