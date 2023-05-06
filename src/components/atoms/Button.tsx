import React, { MouseEventHandler } from 'react'
import styles from './Button.module.scss'

export const ManageButton = ({ href }: { href: string }): JSX.Element => {
  return (
    <div className={styles.wrapper}>
        <span className={styles.manageButtonBody}>
          MANAGE
          <a href={href} className={styles.href} />
        </span>
    </div>
  )
}
export const TransitionButton = ({ href, name }: { href: string, name: string }): JSX.Element => {
  return (
    <div className={styles.wrapper}>
        <span className={styles.transitionButtonBody}>
          {name}
          <a href={href} className={styles.href} />
        </span>
    </div>
  )
}
export const TagButton = ({ name, onClick }: { name: string, onClick? : ()=>void }): JSX.Element => {
  return (
    <div className={styles.wrapper} onClick={onClick}>
        <span className={styles.tagButtonBody}>
          {name}
        </span>
    </div>
  )
}
export const UpsertButton = ({ onClick }: { onClick: MouseEventHandler | undefined }): JSX.Element => {
  return (
    <div className={styles.wrapper}>
        <span className={styles.upsertButtonBody} onClick={onClick}>
          UPSERT
        </span>
    </div>
  )
}
export const DeleteButton = ({ onClick }: { onClick: MouseEventHandler | undefined }): JSX.Element => {
  return (
    <div className={styles.wrapper}>
        <span className={styles.deleteButtonBody} onClick={onClick}>
          DELETE
        </span>
    </div>
  )
}
export const LoginButton = ({ onClick }: { onClick: MouseEventHandler | undefined }): JSX.Element => {
  return (
    <div className={styles.wrapper}>
        <span className={styles.loginButtonBody} onClick={onClick}>
          LOGIN
        </span>
    </div>
  )
}
