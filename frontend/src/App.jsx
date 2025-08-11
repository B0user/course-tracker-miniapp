import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";

export default function App() {
  return (
    <div>
      {/* Navigation */}
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
        {/* <Link to="/about">About</Link> */}
      </nav>

      {/* Routing */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
