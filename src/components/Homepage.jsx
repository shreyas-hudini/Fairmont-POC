import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, Button, Typography } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import '../styles/Layout.scss';

import MenuIcon from '@mui/icons-material/Menu';

// Import images
import Logo from '../assests/images/logo.png';
import landingImage from '../assests/images/landing-Image.png';

const Homepage = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const ischeckedIn = false

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    const menuItems = [
        { text: 'Housekeeping', path: '/housekeeping' },
        { text: 'Spa', path: '/spa' },
        { text: 'In-Room Dining', path: '/in-room-dining' },
        { text: 'Office', path: '/office' },
        { text: 'Events', path: '/events' },
        { text: 'Things to do', path: '/things-to-do' },
        { text: 'Stay Summary', path: '/stay-summary' },
    ];
    const menuItems2 = [
        // { text: 'Housekeeping', path: '/housekeeping' },
        { text: 'Spa', path: '/spa' },
        // { text: 'In-Room Dining', path: '/in-room-dining' },
        { text: 'Office', path: '/office' },
        { text: 'Events', path: '/events' },
        { text: 'Things to do', path: '/things-to-do' },
        // { text: 'Stay Summary', path: '/stay-summary' },
    ];

    return (
        <div className="homepage-container">
            <header className="app-header">
                <img
                    src={Logo}
                    alt="Fairmont The Palm Logo"
                    className="logo"
                />
            </header>

            <main className="main-content">
                <Carousel autoPlay interval={3000} animation="slide" navButtonsAlwaysVisible >
                    <img
                        src={landingImage}
                        alt="Landing 1"
                        className="carousel-image"
                    />
                    <img
                        src={landingImage}
                        alt="Landing 2"
                        className="carousel-image"
                    />
                    <img
                        src={landingImage}
                        alt="Landing 3"
                        className="carousel-image"
                    />
                </Carousel>
            </main>

            <Drawer
                anchor="bottom"
                open={drawerOpen}
                onClose={toggleDrawer}
                className="drawer"
            >
                <div className="drawer-header">
                    <Typography variant="h6">Room 1808</Typography>
                </div>
                <List>
                {ischeckedIn ? (
                    menuItems.map((item) => (
            <ListItem button component="a" href={item.path} key={item.text}>
                <ListItemText primary={item.text} />
            </ListItem>
        ))
    ) : (
        menuItems2.map((item) => (
            <ListItem button component="a" href={item.path} key={item.text}>
                <ListItemText primary={item.text} />
            </ListItem>
        ))
    )}
</List>

            </Drawer>

            <footer className="footer">
                <Button
                    variant="contained"
                    onClick={toggleDrawer}
                    sx={{ backgroundColor: '#393939' }}
                >
                    Open Drawer
                </Button>

                <MenuIcon onClick={toggleDrawer} />
            </footer>
        </div>
    );
};

export default Homepage;
