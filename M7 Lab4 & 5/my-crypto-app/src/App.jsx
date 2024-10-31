import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import BitcoinRates from './pages/BitcoinRates';
import { Container, Grid, Grid2 } from '@mui/material';

const App = () => {
    return (
        <Router>
            <Container fluid className="d-flex flex-column min-vh-100">
                <Navbar />
                <Grid2 container className="flex-grow-1 justify-content-center align-items-center">
                    <Grid2 item xs={12} md={8}>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/bitcoin-rates" element={<BitcoinRates />} />
                        </Routes>
                    </Grid2>
                </Grid2>
            </Container>
        </Router>
    );
};

export default App;
