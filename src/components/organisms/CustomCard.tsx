import { ReactNode } from 'react'
import styles from './CustomCard.module.scss'

export const CustomNormalCard = (
  {children} : {children: ReactNode}
): JSX.Element => {
  return (
    <div className={styles.normalCard}>
      {children}
    </div>
  )
}

export const CustomLinkCard = (
  {href, children} : {href: string, children: ReactNode}
): JSX.Element => {
  return (
    <div className={styles.linkCard}>
      {children}
      <a href={href} className={styles.href} />
    </div>
  )
}
