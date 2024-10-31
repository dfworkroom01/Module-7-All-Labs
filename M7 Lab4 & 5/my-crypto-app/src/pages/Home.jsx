import React from 'react';
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';

const Home = () => {
    return (
        <Container>
            <Grid container spacing={2} className="justify-content-center text-center">
                <Grid item xs={12} md={12}>
                    <Card sx={{ padding: 3, minHeight: 200 }}>
                        <CardContent>
                            <Typography variant="h4">Crypto App</Typography>
                            <Typography variant="body1" sx={{ mt: 2 }}>
                                Cryptocurrency information for anyone :D 
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Home;
