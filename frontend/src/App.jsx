import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home/Home";
import Navigation from "./components/Navigation";

export default function App() {
  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}
