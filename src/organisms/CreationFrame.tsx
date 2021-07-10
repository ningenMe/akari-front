import React from 'react';
import {Grid,Typography} from '@material-ui/core';
import CreationCard from 'molecules/CreationCard'
import Creations from 'constants/Creations'
import Creation from 'interfaces/Creation'

export const CreationFrame = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant="h5" component="h2">
                    Creation
                </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
                <CreationCard creation={Creations.PROBLEMS} />
            </Grid>
            <Grid item xs={12} sm={4}>
                <CreationCard creation={Creations.COMPRO_CATEGORY} />
            </Grid>
            <Grid item xs={12} sm={4}>
                <CreationCard creation={Creations.COMPRO_LIBRARY} />
            </Grid>
            <Grid item xs={12} sm={4}>
                <CreationCard creation={Creations.WORKS} />
            </Grid>
            <Grid item xs={12} sm={4}>
                <CreationCard creation={Creations.ARTICLES} />
            </Grid>
            <Grid item xs={12} sm={4}>
                <CreationCard creation={Creations.BLOGS} />
            </Grid>
        </Grid>
    );
}
export default CreationFrame