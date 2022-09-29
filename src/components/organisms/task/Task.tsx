import { Container } from '@mui/material'
import { Typography } from '@material-ui/core'
import { Title } from '../../atoms/home/Title'
import React from 'react'
import { TASK_LIST } from '../../../constants/taskList'
import { CustomLinkCard } from '../CustomCard'
import styles from './Task.module.scss'
import { onlineJudgeIconPath } from '../../../atoms/onlineJudgeIconPath'

export const Task = () => {
  const cardList = TASK_LIST.map((task) =>
    <CustomLinkCard href={task.href} key={task.href}>
      {/* TODO 画像と文字を横並びにする */}
      <img src={onlineJudgeIconPath(task.type)} width={50} height={50} />
      <h5 className={styles.title}>
        {task.title}
      </h5>
    </CustomLinkCard>
  )

  return (
    <Container>
      <Title title='Task' />
      {/* TODO ここの説明文にcssを当てる */}
      <Typography variant='body2'>ningenMeの作った問題一覧</Typography>
      <div className={styles.grid}>
        {cardList}
      </div>
    </Container>
  )
}
