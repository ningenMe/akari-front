import {Card,Grid,Typography} from '@material-ui/core';
import {otomanopeeOneFont,yomogiFont} from 'styles/FontStyles'

export const DiaryTitleFrame = ({date}:{date:string}) => {

    return (
        <Grid container>
            <Grid item xs={4}>
            </Grid>
            <Grid item xs={4}>
                <Card style={{backgroundColor:"#FFFFDD"}}>
                    <Typography variant="h3" align="center" style={otomanopeeOneFont}>
                        今日のITドカタ
                    </Typography>
                </Card>
                <Typography variant="h6" align="center" style={yomogiFont}>
                    {date}
                </Typography>
            </Grid>
            <Grid item xs={4}>
            </Grid>
        </Grid>
    )
}
