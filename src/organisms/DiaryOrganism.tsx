import { Button, Card, CardContent, Grid, Typography } from '@material-ui/core'
import { mPlusFont, otomanopeeOneFont, yomogiFont } from 'styles/FontStyles'
import { Blog, DiaryWithAround } from 'interfaces/Blog'
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'
import IconButton from '@material-ui/core/IconButton'
import { Paths } from 'constants/Paths'
import { MarkdownList } from 'molecules/MarkdownList'
import { useState } from 'react'
import StarSharpIcon from '@material-ui/icons/StarSharp'
import { putDiaryLiked } from 'repository/BlogRepository'
import { TweetButton } from 'molecules/TweetButton'
import { Links } from 'constants/Links'

export const Title = ({ date }: { date: string }) => {

  return (
    <Grid container>
      <Grid item xs={3}>
      </Grid>
      <Grid item xs={6}>
        <Card style={{ backgroundColor: '#FFFFDD' }}>
          <Typography variant='h3' align='center' style={otomanopeeOneFont}>
            今日のITドカタ
          </Typography>
        </Card>
      </Grid>
      <Grid item xs={3}>
      </Grid>
      <Grid item xs={12}>
        <Typography variant='h6' align='center' style={yomogiFont}>
          {date}
        </Typography>
      </Grid>
    </Grid>
  )
}


export const Pagination = ({ diary }: { diary: DiaryWithAround }) => {

  const getUrl = (blog: Blog | null) => {
    if (blog == null) return '/'
    return blog.url
  }

  return (
    <Grid container alignItems='center' justifyContent='center'>
      <IconButton color='primary' href={getUrl(diary.prev)} disabled={diary.prev == null}>
        prev
        <ArrowLeftIcon fontSize='large' />
      </IconButton>
      <Button variant='outlined' color='primary' size='large' href={Paths.DIARIES}>
        一覧
      </Button>
      <IconButton color='primary' href={getUrl(diary.next)} disabled={diary.next == null}>
        <ArrowRightIcon fontSize='large' />
        next
      </IconButton>
    </Grid>
  )
}

export const Body = ({ body }: { body: string }) => {
  return (
    <Card variant='outlined'>
      <CardContent style={mPlusFont}>
        <MarkdownList body={body} />
      </CardContent>
    </Card>
  )
}

export const ButtonList = ({ diary }: { diary: DiaryWithAround }) => {

  const [liked, setLiked] = useState<number>(diary.curr.liked)

  const incrementLiked = async () => {
    setLiked(liked + 1)
    putDiaryLiked(diary.curr.date)
  }

  return (
    <Grid container>
      <Grid item>
        <IconButton color='secondary' onClick={() => {
          incrementLiked()
        }}>
          <StarSharpIcon />
          {liked}
        </IconButton>
      </Grid>
      <Grid item>
        <TweetButton url={diary.curr.url} text={diary.curr.title + ' - ' + Links.DIARIES.name} />
      </Grid>
    </Grid>
  )
}
