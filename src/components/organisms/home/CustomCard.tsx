import { ReactNode } from 'react'
import styles from './CustomCard.module.scss'

export const CustomCard = (
  {children} : {children: ReactNode}
) => {
  return (
    <div className={styles.card}>
      {children}
    </div>
  )
}
