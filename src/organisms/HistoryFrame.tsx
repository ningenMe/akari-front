import React from 'react';
import {Grid,Typography,Card,CardContent} from '@material-ui/core'
import FrameTitle from 'atoms/FrameTitle'
import History from 'interfaces/History'
import HistoryContent from 'interfaces/HistoryContent'
import CardStyle from 'styles/CardStyle'

export const HistoryFrame = () => {    
    const histories : ReadonlyArray<History> = [
        new History(2019,2021,"Yahoo! Japan Software Engineer",[]),
        new History(2017,2019,"大阪大学大学院　基礎工学研究科",[]),
        new History(2013,2017,"大阪大学　基礎工学部",[])
    ]
    const contents = histories.map((history) =>
        <Grid item xs={12} sm={4}>
            <Typography variant="body2" component="p">
                {history.getBpdyWithPeriod()}
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
export default HistoryFrame