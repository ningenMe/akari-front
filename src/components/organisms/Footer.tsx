import styles from './Footer.module.scss'
import { AppBar } from '@mui/material'

const Copy = () => {
  return (
    <span className={styles.text}>&copy; 2023 Furuta Taishi</span>
  )
}

export const NingenmeNetFooter = (): JSX.Element => {
  return (
    <AppBar position='static' className={styles.ningenmeNetAppbar}>
      <Copy />
    </AppBar>
  )
}
export const ComproCategoryFooter = (): JSX.Element => {
  return (
    <AppBar position='static' className={styles.comproCategoryAppbar}>
      <Copy />
    </AppBar>
  )
}
