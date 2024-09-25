import React from 'react';
import TopBar from './components/TopBar';
import Carousel from './components/Carousel';
import ExploreButton from './components/ExploreButton';
import './App.css';

const Homepage = () => {
  return (
    <div className="app">
      <TopBar />
      <Carousel />
      <ExploreButton />
    </div>
  );
};

export default Homepage;
