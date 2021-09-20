import React from 'react'
import { Card, CardContent, Grid, Typography } from '@material-ui/core'
import { FrameTitle } from 'atoms/FrameTitle'
import { OptionalHref } from 'atoms/OptionalHref'
import { CardStyle } from 'styles/CardStyle'
import { HistoryContent } from 'interfaces/HistoryContent'
import { CreationCard, ProfileCard } from 'molecules/HomeMolecule'
import { CREATION_LIST } from 'constants/creationList'
import { ACTIVITY_LIST } from 'constants/activityList'
import { HISTORY_LIST } from 'constants/historyList'

export const Profile = () => {
  return (
    <ProfileCard />
  )
}

export const Creation = () => {

  const cards = CREATION_LIST.map((creation) =>
    <Grid item xs={12} sm={4}>
      <CreationCard creation={creation} />
    </Grid>,
  )

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <FrameTitle body='Creation' />
      </Grid>
      {cards}
    </Grid>
  )
}

export const Activity = () => {

  const contents = ACTIVITY_LIST.map((activity) =>
    <Typography variant='body2' component='p' key={activity.body}>
      <OptionalHref body={activity.year + ': ' + activity.body} href={activity.href} />
    </Typography>,
  )

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <FrameTitle body='Activitiy' />
      </Grid>
      <Grid item xs={12}>
        <Card variant='outlined' style={CardStyle}>
          <CardContent>
            {contents}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export const History = () => {

  const innerContents = (historyContentList: ReadonlyArray<HistoryContent>) => {
    return historyContentList.map((historyContent) =>
      <>
        <Grid item xs={1}>
        </Grid>
        <Grid item xs={11}>
          {'・'}
          <OptionalHref body={historyContent.body} href={historyContent.href} />
        </Grid>
      </>,
    )
  }

  const contents = HISTORY_LIST.map((history) =>
    <>
      <Typography variant='body1' component='p'>
        {history.yearFrom}-{history.yearTo}: {history.body}
      </Typography>
      <Grid container>
        {innerContents(history.contentList)}
      </Grid>
    </>,
  )

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <FrameTitle body='History' />
      </Grid>
      <Grid item xs={12}>
        <Card variant='outlined'>
          <CardContent style={CardStyle}>
            {contents}
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
      </Grid>
    </Grid>
  )
}
