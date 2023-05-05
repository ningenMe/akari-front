import { Profile } from '../organisms/home/Profile'
import { Creation } from '../organisms/home/Creation'
import { History } from '../organisms/home/History'
import styles from './Home.module.scss'
import { Activity } from '../organisms/home/Activity'
import { Container } from '@mui/material'
import { RecentBlog } from '../organisms/home/RecentBlog'

export const Home = (): JSX.Element => {
  return (
    <Container>
      <Profile />
      <RecentBlog />
      <Creation />
      <div className={styles.grid}>
        <Activity />
        <History />
      </div>
    </Container>
  )
}
