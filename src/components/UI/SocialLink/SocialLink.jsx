import React from 'react'

import styles from './SocialLink.module.scss'

const SocialLink = ({ children }) => {
  return <button className={styles.socialLink}>{children}</button>
}

export default SocialLink
