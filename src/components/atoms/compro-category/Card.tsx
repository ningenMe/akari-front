import React, { ReactNode } from 'react'
import styles from './Card.module.scss'

export const CategoryNormalCard = ({
                                     categoryDisplayName, children,
                                   }: { categoryDisplayName: string, children?: ReactNode }): JSX.Element => {
  return (
    <div className={styles.categoryNormalCard}>
      <h4 className={styles.categoryTitle}>{categoryDisplayName}</h4>
      {children}
    </div>
  )
}
export const CategoryLinkCard = ({
                                   href, categoryDisplayName, children,
                                 }: { href: string, categoryDisplayName: string, children?: ReactNode }): JSX.Element => {
  return (
    <button className={styles.categoryLinkCard}>
      <h4 className={styles.categoryTitle}>{categoryDisplayName}</h4>
      {children}
      <a href={href} className={styles.href} />
    </button>
  )
}
export const TopicNormalCard = ({
                                  topicDisplayName, children,
                                }: { topicDisplayName: string, children?: ReactNode }): JSX.Element => {
  return (
    <div className={styles.topicNormalCard}>
      <h5 className={styles.topicTitle}>{topicDisplayName}</h5>
      {children}
    </div>
  )
}
export const TopicLinkCard = ({
                                href, topicDisplayName, children,
                              }: { href: string, topicDisplayName: string, children?: ReactNode }): JSX.Element => {
  return (
    <button className={styles.topicLinkCard}>
      <h5 className={styles.topicTitle}>{topicDisplayName}</h5>
      {children}
      <a href={href} className={styles.href} />
    </button>
  )
}
export const PageTextCard = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <div className={styles.pageTextCard}>
      {children}
    </div>
  )
}
