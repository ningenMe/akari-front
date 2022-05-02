import styles from './Title.module.scss'

export const Title = ({ title }: { title: string }) => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>
        {title}
      </span>
    </div>
  )
}
