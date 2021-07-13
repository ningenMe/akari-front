import {Card,Grid,Typography} from '@material-ui/core';
import {otomanopeeOneFont,yomogiFont} from 'styles/FontStyles'
import {DiaryWithAround} from 'interfaces/Blog'
import StarSharpIcon from '@material-ui/icons/StarSharp';
import IconButton from '@material-ui/core/IconButton';

export const DiaryPagingFrame = ({date,diary}:{date:string,diary:DiaryWithAround}) => {

    return (
        <Grid container>
            <Grid item xs={12}>
                <Typography variant="h6" align="center" style={yomogiFont}>
                    {date}
                </Typography>
            </Grid>
            <Grid item xs={6}>
            </Grid>
            <Grid item xs={2}>
                <IconButton color="secondary">
                    <StarSharpIcon/>
                    {diary.curr?.liked}
                </IconButton>
            </Grid>
            <Grid item xs={4}>
            </Grid>
        </Grid>
    )
}
