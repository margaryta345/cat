import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Galerei from "./components/Gallerie/galerei";
import KontactPage from "./components/Kontact/kontactpage";
import Girls from "./components/girls/girls";
import Boy from "./components/boy/boy";
import MainPage from "./components/mainPage/main.Page";
import Kätzchen from "./components/Kätzchen/kätzchen";
import React, { useEffect } from "react";

function ScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<MainPage />} />
        <Route path="/about" element={<MainPage />} />
        <Route path="/Mädchenkatzen" element={<Girls />} />
        <Route path="/kätzchen" element={<Kätzchen />} />
        <Route path="/jungekätzchen" element={<Boy />} />
        <Route path="/galerie" element={<Galerei />} />
        <Route path="/kontact" element={<KontactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
