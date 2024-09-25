import React, { useState } from 'react';
import './ExploreButton.css';
import Expandless from '../assets/expand-less.svg';
import Button from '@mui/material/Button';

const ExploreButton = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="explore-button-container">
      <Button className="explore-button" onClick={toggleDrawer}>
        <span>EXPLORE</span>
        <img src={Expandless} alt="Expand Less" className="icon" />
      </Button>
      {isDrawerOpen && (
        <div className="drawer">
          <ul>
            <li>Explore Item 1</li>
            <li>Explore Item 2</li>
            <li>Explore Item 3</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ExploreButton;
