import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tooltip,
  IconButton,
  Collapse,
  Box,
  Typography,
  Divider,
} from "@mui/material";
import {
  ChevronLeft,
  ChevronRight,
  ExpandLess,
  ExpandMore,
} from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import menuItems from "./menuItems";
import { useTheme } from "@mui/material/styles";
import logoImage from "../public/logo.png";
import logoImageWhite from "../public/logo-white.png";

interface SidebarDrawerProps {
  isOpen: boolean;
  submenuOpen: Record<string, boolean>;
  toggleSubmenu: (label: string) => void;
  toggleDrawer: () => void;
}

const SidebarDrawer: React.FC<SidebarDrawerProps> = ({
  isOpen,
  submenuOpen,
  toggleSubmenu,
  toggleDrawer,
}) => {
  const theme = useTheme();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: isOpen ? 200 : 60,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: isOpen ? 200 : 60,
          transition: "width 0.3s",
          overflowX: "hidden",
          bgcolor: theme.palette.background.paper,
          color: theme.palette.text.primary,
        },
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          overflowY: "auto",
          overflowX: "hidden",
          width: "100%",
          pr: 2,
        }}
      >
        <Box
          sx={{
            p: 0,
            display: "flex",
            ml: isOpen ? 4 : 0,
            mt: 1,
            mb: 1,
            alignItems: "center",
            justifyContent: isOpen ? "center" : "flex-start",
          }}
        >
          <Box
            component="img"
            src={theme.palette.mode === "dark" ? logoImageWhite : logoImage}
            alt="Logo"
            sx={{ width: isOpen ? 32 : 25, height: isOpen ? 32 : 25 }}
            ml={isOpen ? 0 : 1.5}
            mr={isOpen ? 1 : 0}
          />
          {isOpen ? (
            <>
              <Typography
                variant="h6"
                sx={{ fontWeight: 700, whiteSpace: "nowrap" }}
              >
                IMS
              </Typography>
            </>
          ) : (
            ""
          )}
          <Box
            sx={{
              py: 1,
              pl: isOpen ? 1 : 0,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <IconButton
              onClick={toggleDrawer}
              sx={{
                "&:hover": { backgroundColor: "transparent", color: "inherit" },
                pl: isOpen ? 1 : 0,
              }}
              size="small"
            >
              {isOpen ? <ChevronLeft /> : <ChevronRight />}
            </IconButton>
          </Box>
        </Box>
        <List>
          {menuItems.map((item) => (
            <React.Fragment key={item.label}>
              <ListItem
                component={item.path ? NavLink : "div"}
                to={item.path || ""}
                sx={{
                  "&.active": {
                    bgcolor:
                      theme.palette.mode === "dark" ? "#2c2c3e" : "#d0e1ff",
                    color: theme.palette.mode === "dark" ? "white" : "black",
                  },
                  my: 0.5,
                  mx: 1,
                  px: 1,
                  borderRadius: 1,
                }}
              >
                <Tooltip
                  title={!isOpen ? item.label : ""}
                  placement="right"
                  arrow
                  disableHoverListener={isOpen}
                >
                  <ListItemIcon sx={{ color: "inherit", minWidth: 40 }}>
                    {item.icon}
                  </ListItemIcon>
                </Tooltip>
                {isOpen && (
                  <ListItemText
                    primary={item.label}
                    sx={{ "& span": { fontSize: "0.85rem" } }}
                  />
                )}
                {item.children && (
                  <IconButton
                    edge="end"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      toggleSubmenu(item.label);
                    }}
                    sx={{ color: "inherit" }}
                  >
                    {submenuOpen[item.label] ? <ExpandLess /> : <ExpandMore />}
                  </IconButton>
                )}
              </ListItem>

              {item.children && (
                <Collapse
                  in={submenuOpen[item.label]}
                  timeout="auto"
                  unmountOnExit
                >
                  <List component="div" disablePadding>
                    {item.children.map((child) => (
                      <ListItem
                        key={child.label}
                        component={NavLink}
                        to={child.path || ""}
                        sx={{
                          pl: 6,
                          mx: 1,
                          my: 0.5,
                          borderRadius: 1,
                          "&.active": {
                            bgcolor:
                              theme.palette.mode === "dark"
                                ? "#3c3c4e"
                                : "#e6f0ff",
                          },
                        }}
                      >
                        <ListItemIcon sx={{ color: "inherit", minWidth: 40 }}>
                          {child.icon}
                        </ListItemIcon>
                        <ListItemText primary={child.label} />
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              )}
            </React.Fragment>
          ))}
        </List>
      </Box>

      <Divider />
    </Drawer>
  );
};

export default SidebarDrawer;
