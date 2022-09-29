import { Container } from '@mui/material'
import { Title } from '../../atoms/home/Title'
import React from 'react'
import styles from './Health.module.scss'
import { TASK_LIST } from '../../../constants/taskList'
import { CustomLinkCard } from '../CustomCard'

// const useHealth = () => {
//   const [message, setMessage] = useState < string>('')
//
//   useEffect(() => {
//     ninaApiHealthClient.get(new Empty(), null)
//       .then(res => setMessage(res.getMessage()))
//       .catch(err => {
//         console.log(err)
//         setMessage('not found')
//       })
//   }, [message])
//
//   return message
// }

export const Health = () => {
  const cardList = TASK_LIST.map((task) =>
    <CustomLinkCard href={task.href} key={task.href}>
      <></>
    </CustomLinkCard>
  )
  return (
    <Container>
      <Title title='API Health Check Page' />
      <div className={styles.grid}>
        {cardList}
      </div>
    </Container>
  )
}
