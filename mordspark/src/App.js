import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import About from "./pages/About";
import ProjectsPage from "./pages/Projects";
import Contact from "./pages/Contact";
import Service from "./pages/Services";

function App() {
  return (
    <Router>
      <NavBar />   {/* Always visible */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Service />} />
      </Routes>
      <Footer />   {/* Always visible */}
    </Router>
  );
}

export default App;
