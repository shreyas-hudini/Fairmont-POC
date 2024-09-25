import React, { useState, useEffect } from 'react';
import { Drawer, List, ListItem, ListItemText, Button, Typography } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import '../styles/Layout.scss';

import MenuIcon from '@mui/icons-material/Menu';

// Import images
import Logo from '../assests/images/logo.png';
import landingImage from '../assests/images/landing-Image.png';

const Homepage = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        // Set LastName and BookingId in localStorage
        localStorage.setItem('LastName', 'Biradar');
        localStorage.setItem('BookingId', '22346781');

        // Check if LastName and BookingId are present in localStorage
        const lastName = localStorage.getItem('LastName');
        const bookingId = localStorage.getItem('BookingId');

        if (lastName === 'Biradar' && bookingId === '22346781') {
            setIsAuthenticated(true);
        }
    }, []);

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
        { text: 'Spa', path: '/spa' },
        { text: 'Office', path: '/office' },
        { text: 'Events', path: '/events' },
        { text: 'Things to do', path: '/things-to-do' },
    ];

    return (
        <div className="homepage-container">
            <header className="app-header">
                <img src={Logo} alt="Fairmont The Palm Logo" className="logo" />
            </header>

            <main className="main-content">
                <Carousel autoPlay interval={3000} animation="slide">
                    <div className="carousel-content">
                        <img src={landingImage} alt="Landing 1" className="carousel-image" />
                        <Typography variant="h5" className="carousel-text">
                            Welcome to <br/>Fairmont The Palm
                        </Typography>
                    </div>
                    <div className="carousel-content">
                        <img src={landingImage} alt="Landing 2" className="carousel-image" />
                        <Typography variant="h5" className="carousel-text">
                        Welcome to <br/>Fairmont The Palm
                        </Typography>
                    </div>
                    <div className="carousel-content">
                        <img src={landingImage} alt="Landing 3" className="carousel-image" />
                        <Typography variant="h5" className="carousel-text">
                        Welcome to Fairmont The Palm
                        </Typography>
                    </div>
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
                    {isAuthenticated ? (
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
                    sx={{ backgroundColor: '#393939', borderRadius: 0 }}
                    className="footer-button"
                >
                    EXPLORE
                </Button>

                <MenuIcon onClick={toggleDrawer} />
            </footer>
        </div>
    );
};

export default Homepage;
