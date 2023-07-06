import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Experience from "./Experience/Experience";
import NotFound from "./NotFound";
import './App.css'
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Home" element={<Home />} />
      <Route path="Experience" element={<Experience />} />
      <Route element={<NotFound />} />
    </Routes>
  );
}
