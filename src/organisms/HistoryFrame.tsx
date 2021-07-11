import {Grid,Typography,Card,CardContent} from '@material-ui/core'
import {FrameTitle} from 'atoms/FrameTitle'
import {CardStyle} from 'styles/CardStyle'
import {histories} from 'constants/Histories'
import {OptionalHref} from 'atoms/OptionalHref'
import {HistoryContent} from 'interfaces/HistoryContent'

export const HistoryFrame = () => {    


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