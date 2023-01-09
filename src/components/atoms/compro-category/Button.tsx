import React, { MouseEventHandler } from 'react'
import styles from './Button.module.scss'

export const ManageButton = ({ href }: { href: string }) => {
  return (
    <div className={styles.wrapper}>
        <span className={styles.manageButtonBody}>
          MANAGE
          <a href={href} className={styles.href} />
        </span>
    </div>
  )
}
export const UpsertButton = ({ onClick }: { onClick: MouseEventHandler | undefined }) => {
  return (
    <div className={styles.wrapper}>
        <span className={styles.upsertButtonBody} onClick={onClick}>
          UPSERT
        </span>
    </div>
  )
}
export const DeleteButton = ({ onClick }: { onClick: MouseEventHandler | undefined }) => {
  return (
    <div className={styles.wrapper}>
        <span className={styles.deleteButtonBody} onClick={onClick}>
          DELETE
        </span>
    </div>
  )
}
