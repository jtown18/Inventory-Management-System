import InventoryIcon from "@mui/icons-material/Inventory";
import RealEstateAgentIcon from "@mui/icons-material/RealEstateAgent";
import AssessmentIcon from "@mui/icons-material/Assessment";

export type MenuItem = {
  label: string;
  path?: string;
  icon: React.ReactNode;
  children?: MenuItem[];
};

const menuItems: MenuItem[] = [
  { label: "Dashboard", path: "/", icon: <AssessmentIcon /> },
  { label: "Inventory", path: "/Inventory", icon: <InventoryIcon /> },
  { label: "Sales", path: "/Sales", icon: <RealEstateAgentIcon /> },
];

export default menuItems;
