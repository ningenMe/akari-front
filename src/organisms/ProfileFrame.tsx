import React from 'react';
import {Grid} from '@material-ui/core'
import ProfileCard from 'molecules/ProfileCard'
import FrameTitle from 'atoms/FrameTitle'

export const ProfileFrame = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <FrameTitle body="Profile" />
            </Grid>
            <Grid item xs={12}>
                <ProfileCard/>
            </Grid>
        </Grid>
    );
}
export default ProfileFrame