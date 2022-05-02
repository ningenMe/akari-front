import { Navbar } from 'react-bootstrap'
import styles from './Footer.module.scss'
export const Footer = () => {
  return (
    <Navbar bg='dark' variant='dark' expand='lg'>
      <span className={styles.text}>&copy; 2022 Furuta Taishi</span>
    </Navbar>
  )
}
