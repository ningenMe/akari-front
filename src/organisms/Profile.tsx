import React from 'react';
import {Grid,Typography} from '@material-ui/core'
import ProfileCard from 'molecules/ProfileCard'

export const Profile = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant="h5" component="h2">
                    Profile
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <ProfileCard/>
            </Grid>
        </Grid>
    );
}
export default Profile