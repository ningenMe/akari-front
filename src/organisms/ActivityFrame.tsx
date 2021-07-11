import {Grid,Typography,Card,CardContent} from '@material-ui/core';
import {activities} from 'constants/Activities'
import {OptionalHref} from 'atoms/OptionalHref'
import {FrameTitle} from 'atoms/FrameTitle'
import {CardStyle} from 'styles/CardStyle'

export const ActivityFrame = () => {

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