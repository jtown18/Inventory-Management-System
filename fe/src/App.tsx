import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/layout";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* All these routes will render inside the Layout's Outlet */}
          <Route index element={<h1>Dashboard Home</h1>} />

          <Route path="inventory">
            <Route index element={<h1>Inventory List</h1>} />
            <Route path=":id" element={<h1>Inventory Item Details</h1>} />
          </Route>

          <Route path="sales">
            <Route index element={<h1>Sales List</h1>} />
            <Route path=":id" element={<h1>Sales Item Details</h1>} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
