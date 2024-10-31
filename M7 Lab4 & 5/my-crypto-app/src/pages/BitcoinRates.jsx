import React, { useEffect, useState } from 'react';
import { Container, Typography, CircularProgress, Grid, Card, CardContent } from '@mui/material';
import axios from 'axios';

const BitcoinRates = () => {
    const [rates, setRates] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRates = async () => {
            try {
                const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
                setRates(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchRates();
    }, []);

    if (loading) {
        return (
            <Container>
                <Grid container className="justify-content-center">
                    <Grid item>
                        <CircularProgress />
                    </Grid>
                </Grid>
            </Container>
        );
    }

    return (
        <Container>
            <Grid container className="justify-content-center text-center">
                <Grid item xs={12} md={15}>
                    <Card>
                        <CardContent>
                            <Typography variant="h4">Bitcoin Rates</Typography>
                            <Typography variant="body1" sx={{ mt: 4 }}>
                                Current Bitcoin Rate: ${rates.bitcoin.usd}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default BitcoinRates;
