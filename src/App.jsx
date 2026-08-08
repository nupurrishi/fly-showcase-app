import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Splash from "./pages/Splash";
import Login from "./pages/Login";
import RoleSelect from "./pages/RoleSelect";
import ModelDashboard from "./pages/ModelDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import Schedule from "./pages/Schedule";
import Lookbook from "./pages/Lookbook";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Splash />} />

        <Route path="/login" element={<Login />} />

        <Route path="/roles" element={<RoleSelect />} />

        <Route
          path="/model"
          element={<ModelDashboard />}
        />

        <Route
          path="/admin"
          element={<AdminDashboard />}
        />

        <Route
          path="/schedule"
          element={<Schedule />}
        />

        <Route
          path="/lookbook"
          element={<Lookbook />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;