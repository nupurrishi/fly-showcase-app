import Splash from "./pages/Splash";
import Login from "./pages/Login";
import ModelDashboard from "./pages/ModelDashboard";
import EventSelect from "./pages/EventSelect";
import ManagerDashboard from "./pages/ManagerDashboard";
import DesignerDashboard from "./pages/DesignerDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import Schedule from "./pages/Schedule";
import HairMakeup from "./pages/HairMakeup";


function App() {
  const path = window.location.pathname;

  let page;

  if (path === "/login") {
    page = <Login />;
  } else if (path === "/events") {
    page = <EventSelect />;
  } else if (path === "/model") {
    page = <ModelDashboard />;
  } else if (path === "/manager") {
    page = <ManagerDashboard />;
  } else if (path === "/designer") {
    page = <DesignerDashboard />;
  } else if (path === "/admin") {
    page = <AdminDashboard />;
  } else if (path === "/schedule") {
    page = <Schedule />;
  } else if (path === "/hair-makeup") {
    page = <HairMakeup />;
  } else {
    page = <Splash />;
  }

  return (
    <div className="app-shell">
      <div className="app-content">{page}</div>
    </div>
  );
}

export default App;