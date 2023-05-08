import React from 'react'
import { Problem } from 'miiko-api/proto/gen_ts/v1/miiko_pb'
import styles from './ProblemTable.module.scss'

export const ProblemTable = ({ problemList }: { problemList: Problem[] }): JSX.Element => {

  return (
    <table className={styles.table}>
      <tbody>
      {problemList.map(it => {
        return (
          <tr key={it.problemId}>
            <td className={styles.table}>
              <a href={it.url}>{it.problemDisplayName}</a>
            </td>
            <td className={styles.table}>{it.estimation}</td>
            <td className={styles.table}>is_atcoder</td>
            <td className={styles.table}>
              edit
              {/*<ProblemButton href={PathConst.COMPRO_CATEGORY_PROBLEM_EDIT(it.problemId)} name={'edit'} />*/}
            </td>
          </tr>)
      })}
      </tbody>
    </table>
  )
}
