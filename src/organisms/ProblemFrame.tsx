import {Grid,Typography} from '@material-ui/core';
import {FrameTitle} from 'atoms/FrameTitle'
import {ProblemCard} from 'molecules/ProblemCard'
import {problems} from 'constants/Problems'

export const ProblemFrame = () => {

    const contents = problems.map((problem) => 
        <Grid item xs={12}>
            <ProblemCard problem = {problem} />
        </Grid>
    )

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <FrameTitle body="problems" />
                <Typography variant="body2">ningenMeの作った問題一覧</Typography>
            </Grid>
            <Grid item xs={1}>
            </Grid>
            <Grid item xs={10}>
                <Grid container spacing={2}>
                    {contents}
                </Grid>
            </Grid>
            <Grid item xs={1}>
            </Grid>
        </Grid>
    );
}
