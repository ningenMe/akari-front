import React from 'react';
import {Grid, Container} from '@material-ui/core';
import ProfileFrame from 'organisms/ProfileFrame'
import CreationFrame from 'organisms/CreationFrame'
import ActivityFrame from 'organisms/ActivityFrame'
import HistoryFrame from 'organisms/HistoryFrame'

export const Home = () => {
    return (
        <Container>
            <Grid container spacing = {4}>
                <Grid item xs={12}></Grid>
            </Grid>
            <ProfileFrame/>
            <CreationFrame/>
            <ActivityFrame/>
            <HistoryFrame/>
        </Container>
    );
}
export default Home