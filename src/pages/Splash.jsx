import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/login");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <main className="splash-page">
      <div className="splash-content">

        <div className="logo-mark">FLY</div>

        <h1>SHOWCASE</h1>

        <div className="gold-line"></div>

        <p>FIRST LOVE YOURSELF</p>

        <span className="loading">Preparing your experience...</span>

      </div>
    </main>
  );
}

export default Splash;