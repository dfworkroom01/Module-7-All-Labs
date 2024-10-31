import React from 'react';
import { Container, Typography, TextField, Button, Grid, Card, CardContent } from '@mui/material';

const Login = () => {
    return (
        <Container>
            <Grid container className="justify-content-center">
                <Grid item xs={12} md={15}>
                    <Card>
                        <CardContent>
                            <Typography variant="h4" className="text-center">Login</Typography>
                            <TextField label="Username" variant="outlined" fullWidth margin="normal" />
                            <TextField label="Password" type="password" variant="outlined" fullWidth margin="normal" />
                            <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                                Login
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;
