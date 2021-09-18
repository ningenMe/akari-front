import React from 'react';
import {Grid,Typography,Card,CardContent} from '@material-ui/core'
import {ProfileCard} from 'molecules/ProfileCard'
import {FrameTitle} from 'atoms/FrameTitle'
import {CreationCard} from 'molecules/CreationCard'
import {creations} from 'constants/Creations'
import {activities} from 'constants/Activities'
import {OptionalHref} from 'atoms/OptionalHref'
import {histories} from 'constants/Histories'
import {CardStyle} from 'styles/CardStyle'
import {HistoryContent} from 'interfaces/HistoryContent'

export const Profile = () => {
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

export const Creation = () => {

    const cards = creations.map((creation) =>
        <Grid item xs={12} sm={4}>
            <CreationCard creation={creation} />
        </Grid>
    );

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <FrameTitle body="Creation" />
            </Grid>
            {cards}
        </Grid>
    );
}

export const Activity = () => {

    const contents = activities.map((activity) => 
        <Typography variant="body2" component="p" key={activity.body}>
            <OptionalHref body={activity.year + ": " + activity.body} href={activity.href}/>
        </Typography>    
    );

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <FrameTitle body="Activitiy" />
            </Grid>
            <Grid item xs={12}>
                <Card variant="outlined" style={CardStyle}>
                    <CardContent>
                        {contents}
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}

export const History = () => {    

    const innerContents = (historyContents:ReadonlyArray<HistoryContent>) => {
        return historyContents.map((historyContent) => 
        <>
            <Grid item xs={1}>
            </Grid>
            <Grid item xs={11}>
                {"・"}
                <OptionalHref body={historyContent.body} href={historyContent.href}/>                
            </Grid>
        </>
    );}

    const contents = histories.map((history) =>
        <>
            <Typography variant="body1" component="p">
                {history.yearFrom}-{history.yearTo}: {history.body}
            </Typography>
            <Grid container>
                {innerContents(history.contents)}
            </Grid>
        </>
    );

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <FrameTitle body="History" />
            </Grid>
            <Grid item xs={12}>
                <Card variant="outlined">
                    <CardContent style={CardStyle}>
                        {contents}
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12}>
            </Grid>
        </Grid>
    );
}
