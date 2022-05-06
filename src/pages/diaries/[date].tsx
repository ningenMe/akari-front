import { Container, Grid } from '@material-ui/core'
import fs from 'fs'
import { HtmlHead } from 'organisms/NingenmeNetTemplateOrganism'
import { Body, ButtonList, Pagination, Title } from 'organisms/DiaryOrganism'
import { DiaryWithAround } from 'interfaces/Blog'
import { Footer } from '../../components/organisms/Footer'
import { Header } from '../../components/organisms/Header'

const getBody = (date: string): string => {
  let body: string = '# no contents'

  const matchList = date.match('^20[0-9]{2}-[0-9]{2}-[0-9]{1-2}$')

  if (matchList?.length === 1) {
    return body
  }

  const tmpList = date.split('-')
  const year: string = tmpList[0]
  const day: string = tmpList[1] + '-' + tmpList[2]

  const filePath: string = 'public/markdown/' + year + '/' + day + '.md'
  try {
    body = fs.readFileSync(filePath, { encoding: 'utf8' })
  } catch {
  }
  return body
}

export const getServerSideProps = async ({ params }: { params: { date: string } }) => {

  const date: string = params.date
  const body: string = getBody(date)
  const diary: DiaryWithAround = {
    prev: null,
    curr: {
      url: "",
      type: 'HATENA',
      date: date,
      title: "test",
      liked: 0
    },
    next: null
  }

  return {
    props: { body, date, diary },
  }
}

export const DiariesDate = ({ body, date, diary }: { body: string, date: string, diary: DiaryWithAround }) => {
  return (
    <>
      <HtmlHead />
      <Header />

      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12}>
          </Grid>
          <Grid item xs={12}>
            <Title date={date} />
          </Grid>
          <Grid item xs={12}>
            <Pagination diary={diary} />
          </Grid>
          <Grid item xs={12}>
            <Body body={body} />
          </Grid>
          <Grid item xs={12}>
            <ButtonList diary={diary} />
          </Grid>
          <Grid item xs={12}>
            <Pagination diary={diary} />
          </Grid>
          <Grid item xs={12}>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  )
}
export default DiariesDate
