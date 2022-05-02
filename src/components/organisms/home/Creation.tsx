import { CREATION_LIST } from '../../../constants/creationList'
import { CreationCard } from '../../../molecules/HomeMolecule'
import React from 'react'
import { Title } from '../../atoms/home/Title'
import styles from './Creation.module.scss'

export const Creation = () => {

  const cards = CREATION_LIST.map((creation) =>
    <CreationCard creation={creation} />
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
