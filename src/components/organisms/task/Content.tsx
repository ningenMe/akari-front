import { TASK_LIST } from '../../../constants/taskList'
import { Grid } from '@material-ui/core'
import { ProblemCard } from '../../../molecules/ProblemMolecule'

export const Content = () => {

  const cardList = TASK_LIST.map((problem) =>
    <Grid item xs={12}>
      <ProblemCard problem={problem} />
    </Grid>,
  )

  return (
    <Grid container spacing={2}>
      <Grid item xs={10}>
        <Grid container spacing={2}>
          {cardList}
        </Grid>
      </Grid>
    </Grid>
  )
}
