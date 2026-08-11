import Login from "./pages/Login";
import ModelDashboard from "./pages/ModelDashboard";
import EventSelect from "./pages/EventSelect";
import ManagerDashboard from "./pages/ManagerDashboard";
import DesignerDashboard from "./pages/DesignerDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import Schedule from "./pages/Schedule";
import HairMakeup from "./pages/HairMakeup";
import LiveShow from "./pages/LiveShow";

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
  };

  return (
    <div className="app">
      <main className="app-page">
        {routes[path] || <Login />}
      </main>
    </div>
  );
}

export default App;
