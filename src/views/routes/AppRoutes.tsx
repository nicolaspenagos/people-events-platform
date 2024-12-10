import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewEvent from "../NewEvent/NewEvent";
import Home from "./Home";
import AllEvents from "../AllEvents/AllEvents";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/new-event" element={<NewEvent />} />
        <Route path="/all-events" element={<AllEvents />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
