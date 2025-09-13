import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <NavBar />   {/* Always visible */}
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />   {/* Always visible */}
    </Router>
  );
}

export default App;
