import React from 'react';
import {Box, Container, Grid, Paper} from '@material-ui/core';
import Profile from 'organisms/Profile'

export const Home = () => {
    return (
        <Container>
            <Box m={1}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Profile/>                        
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Paper elevation={3}>xs=12 sm=6</Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Paper elevation={3}>xs=12 sm=6</Paper>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <Paper elevation={3}>xs=6 sm=3</Paper>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <Paper elevation={3}>xs=6 sm=3</Paper>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <Paper elevation={3}>xs=6 sm=3</Paper>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <Paper elevation={3}>xs=6 sm=3</Paper>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}
export default Home