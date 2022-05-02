import { ACTIVITY_LIST } from '../../../constants/activityList'
import { OptionalHref } from '../../atoms/OptionalHref'
import React from 'react'
import { Title } from '../../atoms/home/Title'
import { CustomNormalCard } from './CustomCard'
import fontStyles from 'styles/Font.module.scss'
import styles from './Activity.module.scss'

export const Activity = () => {

  const contents = ACTIVITY_LIST.map((activity, idx) =>
    <div key={idx} className={fontStyles.body}>
      <span className={styles.year}>{activity.year}</span>
      {': '}
      <OptionalHref body={activity.body} href={activity.href} />
    </div>
  )

  return (
    <div>
      <Title title='Activitiy' />
      <CustomNormalCard>
        {contents}
      </CustomNormalCard>
    </div>
  )
}
