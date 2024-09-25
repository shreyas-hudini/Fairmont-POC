import React from 'react';
import './TopBar.css';
import group from '../assets/images/logo.png';

const TopBar = () => {
  return (
    <div className="top-bar">
      <img
        src={group}
        alt="Fairmont"
        className="top-bar-logo"
      />
    </div>
  );
};

export default TopBar;
