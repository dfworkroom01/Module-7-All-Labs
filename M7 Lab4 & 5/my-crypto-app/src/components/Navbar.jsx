import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const AppNavbar = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <Navbar expand="lg" bg="light" variant="light" expanded={expanded}>
            <Navbar.Brand as={Link} to="/">Crypto App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)}>Home</Nav.Link>
                    <Nav.Link as={Link} to="/login" onClick={() => setExpanded(false)}>Login</Nav.Link>
                    <Nav.Link as={Link} to="/bitcoin-rates" onClick={() => setExpanded(false)}>Bitcoin Rates</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default AppNavbar;
