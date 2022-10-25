import React from 'react'

import styles from './Input.module.scss'

const Input = ({ type, placeholder }) => {
  return (
    <input placeholder={placeholder} className={styles.input} type={type} />
  )
}

export default Input
