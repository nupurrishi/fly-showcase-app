import { useEffect } from "react";

import Login from "./pages/Login";
import EventSelect from "./pages/EventSelect";

import ModelDashboard from "./pages/ModelDashboard";
import ManagerDashboard from "./pages/ManagerDashboard";
import DesignerDashboard from "./pages/DesignerDashboard";
import AdminDashboard from "./pages/AdminDashboard";

import Schedule from "./pages/Schedule";
import HairMakeup from "./pages/HairMakeup";
import LiveShow from "./pages/LiveShow";

import LookBook from "./pages/Lookbook";
import Notifications from "./pages/Notifications";
import Profile from "./pages/Profile";
import Opportunities from "./pages/Opportunities";

import { supabase } from "./lib/supabase";

function App() {
  const path = window.location.pathname;

  const routes = {
    "/login": <Login />,
    "/events": <EventSelect />,

    "/model": <ModelDashboard />,
    "/manager": <ManagerDashboard />,
    "/designer": <DesignerDashboard />,
    "/admin": <AdminDashboard />,

    "/schedule": <Schedule />,
    "/hair-makeup": <HairMakeup />,
    "/live-show": <LiveShow />,

    "/lookbook": <LookBook />,
    "/notifications": <Notifications />,
    "/profile": <Profile />,
    "/opportunities": <Opportunities />,
  };

  return routes[path] || <Login />;
}

export default App;