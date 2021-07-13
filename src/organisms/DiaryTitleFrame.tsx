import {Card,Grid,Typography} from '@material-ui/core';
import {otomanopeeOneFont,yomogiFont} from 'styles/FontStyles'

export const DiaryTitleFrame = () => {

    return (
        <Grid container>
            <Grid item xs={3}>
            </Grid>
            <Grid item xs={6}>
                <Card style={{backgroundColor:"#FFFFDD"}}>
                    <Typography variant="h3" align="center" style={otomanopeeOneFont}>
                        今日のITドカタ
                    </Typography>
                </Card>
            </Grid>
            <Grid item xs={3}>
            </Grid>
        </Grid>
    )
}
