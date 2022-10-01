import React from 'react'
import { OptionalHref } from 'components/atoms/OptionalHref'
import { CustomNormalCard } from '../CustomCard'
import { HistoryContent } from 'interfaces/HistoryContent'
import { HISTORY_LIST } from 'constants/historyList'
import { Title } from '../../atoms/Title'
import fontStyles from 'styles/Font.module.scss'
import styles from './History.module.scss'

export const History = () => {

  const innerContents = (historyContentList: ReadonlyArray<HistoryContent>) => {
    return historyContentList.map((historyContent, idx) =>
      <div key={idx}>
          {'・'}
          <OptionalHref body={historyContent.body} href={historyContent.href} />
      </div>
    )
  }

  const contents = HISTORY_LIST.map((history, idx) =>
    <div key={idx} className={fontStyles.body}>
      <span className={styles.year}>{history.yearFrom}-{history.yearTo}</span>: {history.body}
      <div className={styles.inner}>
        {innerContents(history.contentList)}
      </div>
    </div>
  )

  return (
    <div>
      <Title title='History' />
      <CustomNormalCard>
        {contents}
      </CustomNormalCard>
    </div>
  )
}
