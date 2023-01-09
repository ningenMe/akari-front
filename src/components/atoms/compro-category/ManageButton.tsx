import React from 'react'
import styles from './ManageButton.module.scss'

export const ManageButton = ({ href }: { href: string }) => {
  return (
    <div className={styles.wrapper}>
        <span className={styles.body}>
          MANAGE
          <a href={href} className={styles.href} />
        </span>
    </div>
  )
}
