import { CREATION_LIST } from '../../../constants/creationList'
import React from 'react'
import { Title } from '../../atoms/Title'
import styles from './Creation.module.scss'
import { CustomLinkCard, CustomNormalCard } from '../CustomCard'
import fontStyles from 'styles/Font.module.scss'

export const Creation = (): JSX.Element => {

  const cards = CREATION_LIST.map((creation) =>
  {
    if (creation.isDone) {
      return (
        <CustomLinkCard href={creation.href} key={creation.href}>
          <h5 className={styles.title}>
            {creation.title}
          </h5>
          <p className={fontStyles.body}>
            {creation.body}
          </p>
        </CustomLinkCard>
      )
    }
    return (
      <CustomNormalCard key={creation.href}>
        <h5 className={styles.title}>
          {creation.title}
        </h5>
        <p className={fontStyles.body}>
          準備中...
        </p>
      </CustomNormalCard>
    )
  }
  )

  return (
    <>
      <Title title='Creation' />
      <div className={styles.grid}>
        {cards}
      </div>
    </>
  )
}
