import {Grid,Typography} from '@material-ui/core';
import {ProblemCard,FrameTitle} from 'molecules/ProblemMolecule'
import {problemList} from 'constants/problemList'

export const ProblemCardList = () => {

  const cardList = problemList.map((problem) =>
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
          {cardList}
        </Grid>
      </Grid>
      <Grid item xs={1}>
      </Grid>
    </Grid>
  );
}
