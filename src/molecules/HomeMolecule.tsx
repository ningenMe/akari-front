import { Card, CardActionArea, CardContent, Typography } from '@material-ui/core'
import { CardStyle } from 'styles/CardStyle'
import { ApplicationMeta } from 'interfaces/ApplicationMeta'
import { Creation } from 'interfaces/Creation'

export const LastUpdate = ({ applicationMeta }: { applicationMeta: ApplicationMeta }) => {

  const contents = applicationMeta.updateTime.split('T')
  return (
    <>
      <Typography align='right' variant='body2'>
        last updated at
      </Typography>
      <Typography align='right' variant='h6'>
        {contents[0]} {contents[1]}
      </Typography>
    </>
  )
}


export const CreationCard = ({ creation }: { creation: Creation }) => {
  return (
    <Card variant='outlined' style={CardStyle}>
      <CardActionArea href={creation.href}>
        <CardContent>
          <Typography variant='h6'>
            {creation.title}
          </Typography>
          <Typography variant='body2' component='p'>
            {creation.body}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
