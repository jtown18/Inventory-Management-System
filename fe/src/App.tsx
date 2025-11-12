import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/layout";
import DashboardPage from "./pages/dashboard";
import InventoryPage from "./pages/inventory";

const App = () => {
  //Define application rules and logic routes
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* All these routes will render inside the Layout's Outlet */}
          <Route index element={<DashboardPage />} />

          <Route path="inventory">
            <Route index element={<InventoryPage />} />
            <Route path=":id" element={<h1>Inventory Item Details</h1>} />
          </Route>

          <Route path="sales">
            <Route index element={<h1>Sales List testing lance</h1>} />
            <Route path=":id" element={<h1>Sales Item Details</h1>} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
