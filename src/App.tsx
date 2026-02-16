import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import CertLanding from "./pages/CertLanding";
import Levels from "./pages/Levels";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cert/:certId" element={<CertLanding />} />
      <Route path="/cert/:certId/levels" element={<Levels />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
