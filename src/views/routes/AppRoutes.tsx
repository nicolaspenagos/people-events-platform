import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewEvent from "../NewEvent/NewEvent";
import Home from "./Home";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/new-event" element={<NewEvent />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
