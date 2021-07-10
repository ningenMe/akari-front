import React from 'react';
import {Box, Container} from '@material-ui/core';
import ProfileFrame from 'organisms/ProfileFrame'
import CreationFrame from 'organisms/CreationFrame'
import ActivityFrame from 'organisms/ActivityFrame'
import HistoryFrame from 'organisms/HistoryFrame'

export const Home = () => {
    return (
        <Container>
            <Box m={1}>
                <ProfileFrame/>
                <CreationFrame/>
                <ActivityFrame/>
                <HistoryFrame/>
            </Box>
        </Container>
    );
}
export default Home