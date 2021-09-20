import { Card, CardActionArea, CardContent, Typography } from '@material-ui/core'
import { CardStyle } from 'styles/CardStyle'
import { mPlusFont } from 'styles/FontStyles'
import { ApplicationMeta } from 'interfaces/ApplicationMeta'
import { Creation } from 'interfaces/Creation'

export const ProfileCard = () => {
  const style = Object.assign({}, CardStyle, mPlusFont)
  return (
    <Card variant='outlined' style={style}>
      <CardContent>
        <Typography variant='h5' component='h2'>
          Furuta Taishi
        </Typography>
        <Typography variant='body2' component='p' style={mPlusFont}>
          競技プログラミングが好きです。
          現在はwebのバックエンド開発をしています。インフラもたまにやります。
          学生時代は物性物理と機械学習をしていました。
        </Typography>
      </CardContent>
    </Card>
  )
}


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
