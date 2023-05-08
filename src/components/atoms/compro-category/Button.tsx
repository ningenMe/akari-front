import React from 'react'
import styles from './Button.module.scss'

export const CategoryButton = ({ href, name }: { href: string, name: string }): JSX.Element => {
  return <Button href={href} name={name} buttonStyle={styles.categoryButton} />
}
export const TopicButton = ({ href, name }: { href: string, name: string }): JSX.Element => {
  return <Button href={href} name={name} buttonStyle={styles.topicButton} />
}
export const ProblemButton = ({ href, name }: { href: string, name: string }): JSX.Element => {
  return <Button href={href} name={name} buttonStyle={styles.problemButton} />
}


const Button = ({ href, name, buttonStyle }: { href: string, name: string, buttonStyle: string }): JSX.Element => {
  return (
    <button className={buttonStyle}>
      {name}
      <a href={href} className={styles.href} />
    </button>
  )
}
