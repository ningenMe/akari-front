import { Container } from '@mui/material'
import { Content } from '../organisms/task/Content'
import { Typography } from '@material-ui/core'
import { FrameTitle } from '../../molecules/ProblemMolecule'
import { Title } from '../atoms/home/Title'
import React from 'react'

export const Task = () => {
  return (
    <Container>
      <Title title='Task' />
      <Typography variant='body2'>ningenMeの作った問題一覧</Typography>

      <Content />
    </Container>
  )
}
