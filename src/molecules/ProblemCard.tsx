import {Card,CardActionArea,CardContent,Typography,Grid,Box} from '@material-ui/core';
import {Problem} from 'interfaces/Problem'
import {CardStyle} from 'styles/CardStyle'
import {onlineJudgeIconPath} from 'atoms/OnlineJudgeIconPath'

export const ProblemCard = ({problem}: {problem:Problem}) => {
    return (
        <Card variant="outlined" style={CardStyle}>
            <CardActionArea href={problem.href}>
                <CardContent>
                    <Grid container>
                        <Grid xs={3}>
                            <img src = {onlineJudgeIconPath(problem.type)} width={50} height={50}/>
                        </Grid>
                        <Grid xs={9}>
                            <Typography variant="h5" align="center">
                                {problem.title}
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}