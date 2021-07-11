import {Grid,Typography,Card,CardContent} from '@material-ui/core'
import {FrameTitle} from 'atoms/FrameTitle'
import {CardStyle} from 'styles/CardStyle'
import {histories} from 'constants/Histories'

export const HistoryFrame = () => {    
    const contents = histories.map((history) =>
        <Grid item xs={12} sm={4}>
            <Typography variant="body2" component="p">
                {history.yearFrom}-{history.yearTo}: {history.body}
            </Typography>
        </Grid>
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