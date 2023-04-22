import { Container } from '@mui/material'
import { Title } from '../../atoms/Title'
import React, { useEffect, useState } from 'react'
import styles from './System.module.scss'
import { CustomLinkCard, CustomNormalCard } from '../CustomCard'
import { ninaApiHealthClient } from '../../../repository/NinaApiRepository'
import { Empty } from 'google-protobuf/google/protobuf/empty_pb'
import { HostConst, PathConst } from '../../../constants/Const'
import fontStyles from '../../../styles/Font.module.scss'
import { kiwaApiHealthcheckClient } from '../../../repository/KiwaApiRepository'
import { miikoApiClient } from '../../../repository/MiikoApiRepository'
import { CategoryGetResponse } from 'miiko-api/proto/gen_ts/v1/miiko_pb'

export const System = () => {

  const [ninaApiHealth, setNinaApiHealth] = useState('')
  const [kiwaApiHealth, setKiwaApiHealth] = useState('')
  const [miikoApiHealth, setMiikoApiHealth] = useState('')

  const miikoApiCategoryGet = async () => {
    const res = await miikoApiClient.categoryGet({}) as CategoryGetResponse
    setMiikoApiHealth(res.categoryList[0].categoryId)
  }

  useEffect(() => {
    ninaApiHealthClient.get(new Empty(), null)
      .then(res => setNinaApiHealth(res.getMessage()))
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
    miikoApiCategoryGet()
  }, [])

  return (
    <Container>
      <Title title='システム管理ページ' />
      <div className={styles.grid}>
        <CustomNormalCard>
          <div>
            <h5 className={styles.title}>
              {HostConst.NINA_ENVOY}
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
            <p className={fontStyles.body}>
              healthcheck: {miikoApiHealth}
            </p>
          </div>
        </CustomNormalCard>
        <CustomLinkCard href={PathConst.USER_LOGIN} >
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
