import React from "react";
import "./App.css";
import TopBar from "./components/TopBar";
import Carousel from "./components/Carousel";
import ExploreButton from "./components/ExploreButton";

const App = () => {
  return (
    <div className="app">
      <TopBar />
      <Carousel />
      <ExploreButton />
    </div>
  );
};

export default App;
