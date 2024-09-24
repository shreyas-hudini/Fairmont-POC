import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import Housekeeping from "./components/Housekeeping";
import Spa from "./components/Spa";
import InRoomDining from "./components/InRoomDining";
import Office from "./components/Office";
import Events from "./components/Events";
import ThingsToDo from "./components/ThingsToDo";
import StaySummary from "./components/StaySummary";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/housekeeping" element={<Housekeeping />} />
        <Route path="/spa" element={<Spa />} />
        <Route path="/in-room-dining" element={<InRoomDining />} />
        <Route path="/office" element={<Office />} />
        <Route path="/events" element={<Events />} />
        <Route path="/things-to-do" element={<ThingsToDo />} />
        <Route path="/stay-summary" element={<StaySummary />} />
      </Routes>
    </Router>
  );
};

export default App;
