import { CREATION_LIST } from '../../../constants/creationList'
import React from 'react'
import { Title } from '../../atoms/home/Title'
import styles from './Creation.module.scss'
import { CustomLinkCard } from './CustomCard'
import fontStyles from 'styles/Font.module.scss'

export const Creation = () => {

  const cards = CREATION_LIST.map((creation) =>
    <CustomLinkCard href={creation.href} key={creation.href}>
      <h5 className={styles.title}>
        {creation.title}
      </h5>
      <p className={fontStyles.body}>
        {creation.body}
      </p>
    </CustomLinkCard>
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
