import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home/HomePage.jsx";
import MyCourses from "./pages/mycourses/MyCoursesPage.jsx"
import Navigation from "./shared/ui/Navigation/Navigation.jsx";
import Schedule from "./pages/schedule/SchedulePage.jsx";
import InfoPage from "./pages/info/InfoPage.jsx";

export default function App() {
  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mycourses" element={<MyCourses />} />
        <Route path="/schedule" element={<Schedule/>}/>
        <Route path="/about" element={<InfoPage/>}/>
      </Routes>
    </>
  );
}
