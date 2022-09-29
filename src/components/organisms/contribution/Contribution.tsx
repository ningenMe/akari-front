import { Container } from '@mui/material'
import { Title } from '../../atoms/home/Title'
import React, { useEffect, useState } from 'react'
import { ninaApiHealthClient } from 'repository/NinaApiRepository'
import { Empty } from 'google-protobuf/google/protobuf/empty_pb'

const useHealth = () => {
  const [message, setMessage] = useState < string>('')

  useEffect(() => {
    ninaApiHealthClient.get(new Empty(), null)
      .then(res => setMessage(res.getMessage()))
      .catch(err => {
        console.log(err)
        setMessage('not found')
      })
  }, [message])

  return message
}

export const Contribution = () => {
  return (
    <Container>
      <Title title='Contribution' />
      <div>
        {useHealth()}
      </div>
    </Container>
  )
}
