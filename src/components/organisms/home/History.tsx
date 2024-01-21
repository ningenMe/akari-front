import React from 'react'
import { OptionalHref } from 'components/atoms/OptionalHref'
import { CustomNormalCard } from 'components/organisms/CustomCard'
import { HistoryContent } from 'interfaces/HistoryContent'
import { HISTORY_LIST } from 'constants/historyList'
import { SubTitle } from 'components/atoms/Title'
import fontStyles from 'styles/Font.module.scss'
import styles from './History.module.scss'

export const History = (): JSX.Element => {

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
      <SubTitle title='History' />
      <CustomNormalCard>
        {contents}
      </CustomNormalCard>
    </div>
  )
}
