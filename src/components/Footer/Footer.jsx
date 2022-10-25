import React from 'react'

import styles from './Footer.module.scss'

import logo from '../../assets/images/svg/logo.svg'
import instLogo from '../../assets/images/svg/instagram.svg'
import facebookLogo from '../../assets/images/svg/facebook.svg'
import vkLogo from '../../assets/images/svg/vk.svg'
import tgLogo from '../../assets/images/svg/tg.svg'

import SocialLink from '../UI/SocialLink/SocialLink'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div
          onClick={() => {
            window.scroll({
              left: 0,
              top: 0,
              behavior: 'smooth',
            })
          }}
          className="logo"
        >
          <img src={logo} alt="" />
        </div>
        <span className={styles.copyright}>© 2022 All rights reserved.</span>
        <ul className={`social-links ${styles.socialLinks}`}>
          <li>
            <SocialLink>
              <img src={instLogo} alt="" />
            </SocialLink>
          </li>
          <li>
            <SocialLink>
              <img src={facebookLogo} alt="" />
            </SocialLink>
          </li>
          <li>
            <SocialLink>
              <img src={vkLogo} alt="" />
            </SocialLink>
          </li>
          <li>
            <SocialLink>
              <img src={tgLogo} alt="" />
            </SocialLink>
          </li>
        </ul>
        <div className={styles.group}>
          <span className={styles.copyrightMobile}>
            © 2022 All rights reserved.
          </span>
          <ul className="social-links">
            <li>
              <SocialLink>
                <img src={instLogo} alt="" />
              </SocialLink>
            </li>
            <li>
              <SocialLink>
                <img src={facebookLogo} alt="" />
              </SocialLink>
            </li>
            <li>
              <SocialLink>
                <img src={vkLogo} alt="" />
              </SocialLink>
            </li>
            <li>
              <SocialLink>
                <img src={tgLogo} alt="" />
              </SocialLink>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
