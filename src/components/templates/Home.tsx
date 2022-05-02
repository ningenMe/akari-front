import { Container } from '@material-ui/core'
import { Profile } from '../organisms/home/Profile'
import { Creation } from '../organisms/home/Creation'
import { History } from '../organisms/home/History'
import styles from './Home.module.scss'
import { Activity } from '../organisms/home/Activity'

export const Home = () => {
  return (
    <>
      <Container>
        <Profile />
        <Creation />
        <div className={styles.grid}>
          <Activity />
          <History />
        </div>
      </Container>
    </>
  )
}
