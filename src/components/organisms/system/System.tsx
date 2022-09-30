import { Container } from '@mui/material'
import { Title } from '../../atoms/home/Title'
import React, { useEffect, useState } from 'react'
import styles from './System.module.scss'
import { CustomNormalCard } from '../CustomCard'
import { ninaApiHealthClient } from '../../../repository/NinaApiRepository'
import { Empty } from 'google-protobuf/google/protobuf/empty_pb'
import { HostConst } from '../../../constants/Const'
import fontStyles from '../../../styles/Font.module.scss'

const useNinaApiHealth = ():string => {
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

export const System = () => {
  const ninaApiCard = () => (
    <CustomNormalCard>
      <div>
        <h5 className={styles.title}>
          {HostConst.NINA_ENVOY_API}
        </h5>
        <p className={fontStyles.body}>
          healthcheck: {useNinaApiHealth()}
        </p>
      </div>
    </CustomNormalCard>)

  return (
    <Container>
      <Title title='API Health Check Page' />
      <div className={styles.grid}>
        {ninaApiCard()}
      </div>
    </Container>
  )
}