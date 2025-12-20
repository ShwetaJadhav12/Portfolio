import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/home.jsx";
import Navbar from "./components/Navbar.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;