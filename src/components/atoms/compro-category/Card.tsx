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
export const TopicNormalCard = ({ children }: { children?: ReactNode }): JSX.Element => {
  return (
    <div className={styles.topicNormalCard}>
      {children}
    </div>
  )
}
export const TopicLinkCard = ({
                                href, topicDisplayName, children,
                              }: { href: string, topicDisplayName: string, children?: ReactNode }): JSX.Element => {
  return (
    <button className={styles.topicLinkCard}>
      <h6 className={styles.topicTitle}>{topicDisplayName}</h6>
      {children}
      <a href={href} className={styles.href} />
    </button>
  )
}
export const ProblemNormalCard = ({ children }: { children?: ReactNode }): JSX.Element => {
  return (
    <div className={styles.problemNormalCard}>
      {children}
    </div>
  )
}
export const ProblemLinkCard = ({
                                  href,
                                  problemDisplayName,
                                }: { href: string, problemDisplayName: string }): JSX.Element => {
  return (
    <button className={styles.problemLinkCard}>
      <h6 className={styles.problemTitle}>{problemDisplayName} <b>{getSite({ href })}</b></h6>
      <a href={href} rel='noreferrer noopener' target='_blank' className={styles.href} />
    </button>
  )
}
export const TagLinkCard = ({
                              href, topicDisplayName,
                            }: { href: string, topicDisplayName: string, children?: ReactNode }): JSX.Element => {
  return (
    <button className={styles.tagLinkCard}>
      <h6 className={styles.tagTitle}>{topicDisplayName}</h6>
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
const getSite = ({ href }: { href: string }): string => {
  if (href.match('^https://atcoder.jp*')) {
    return '( AtCoder )'
  }
  if (href.match('^https://judge.yosupo.jp*')) {
    return '( Library Checker )'
  }
  if (href.match('^https://onlinejudge.u-aizu.ac.jp*')) {
    return '( AOJ )'
  }
  if (href.match('^https://yukicoder.me*')) {
    return '( yukicoder )'
  }
  if (href.match('^https://codeforces.com*')) {
    return '( Code Forces )'
  }
  if (href.match('^https://www.hackerrank.com*')) {
    return '( HackerRank )'
  }
  return ''
}
