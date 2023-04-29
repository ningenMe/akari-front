import { Container } from '@mui/material'
import { Title } from '../../atoms/Title'
import React, { useEffect, useState } from 'react'
import styles from './System.module.scss'
import { CustomLinkCard, CustomNormalCard } from '../CustomCard'
import { ninaApiHealthServiceClient } from '../../../repository/NinaApiRepository'
import { HostConst, PathConst } from '../../../constants/Const'
import fontStyles from '../../../styles/Font.module.scss'
import { kiwaApiHealthcheckClient } from '../../../repository/KiwaApiRepository'
import { miikoApiHealthServiceClient } from '../../../repository/MiikoApiRepository'

export const System = () => {

  const [ninaApiHealth, setNinaApiHealth] = useState('')
  const [kiwaApiHealth, setKiwaApiHealth] = useState('')
  const [miikoApiHealth, setMiikoApiHealth] = useState('')

  useEffect(() => {
    ninaApiHealthServiceClient.check({})
      .then(res => setNinaApiHealth('ok'))
      .catch(err => {
        console.log(err)
        setNinaApiHealth('not found')
      })
    kiwaApiHealthcheckClient.healthcheckGet()
      .then(res => setKiwaApiHealth(res.data.message))
      .catch(err => {
        console.log(err)
        setKiwaApiHealth('not found')
      })
    miikoApiHealthServiceClient.check({})
      .then(res => setMiikoApiHealth('ok'))
      .catch(err => {
        console.log(err)
        setMiikoApiHealth('not found')
      })
  }, [])

  return (
    <Container>
      <Title title='システム管理ページ' />
      <div className={styles.grid}>
        <CustomNormalCard>
          <div>
            <h5 className={styles.title}>
              {HostConst.NINA_API}
            </h5>
            <p className={fontStyles.body}>
              healthcheck: {ninaApiHealth}
            </p>
          </div>
        </CustomNormalCard>
        <CustomNormalCard>
          <div>
            <h5 className={styles.title}>
              {HostConst.KIWA_API}
            </h5>
            <p className={fontStyles.body}>
              healthcheck: {kiwaApiHealth}
            </p>
          </div>
        </CustomNormalCard>
        <CustomNormalCard>
          <div>
            <h5 className={styles.title}>
              {HostConst.MIIKO_API}
            </h5>
            <p className={fontStyles.body}>
              healthcheck: {miikoApiHealth}
            </p>
          </div>
        </CustomNormalCard>
        <CustomLinkCard href={PathConst.USER_LOGIN}>
          <h5 className={styles.title}>
            ログイン
          </h5>
          <p className={fontStyles.body}>
            ログイン機能
          </p>
        </CustomLinkCard>
      </div>
    </Container>
  )
}
