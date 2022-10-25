import React from 'react'

import styles from './PopupMenu.module.scss'
import { ReactComponent as Hamburger } from '../../assets/images/svg/hamburger.svg'

import SocialLink from '../UI/SocialLink/SocialLink'

import instLogo from '../../assets/images/svg/instagram.svg'
import facebookLogo from '../../assets/images/svg/facebook.svg'
import vkLogo from '../../assets/images/svg/vk.svg'
import tgLogo from '../../assets/images/svg/tg.svg'

const PopupMenu = ({ scrollTo, setPopupState }) => {
  return (
    <menu className={styles.popupMenu}>
      {window.pageYOffset !== 0 && (
        <div
          onClick={() => setPopupState(false)}
          className={`${styles.hamburger} ${styles.hamburgerOpened}`}
        >
          <Hamburger />
        </div>
      )}
      <ul className={styles.navList}>
        <li
          onClick={(e) => {
            scrollTo(e)
            setPopupState(false)
          }}
        >
          <a href="#reasons">Причины дрессировки</a>
        </li>
        <li
          onClick={(e) => {
            scrollTo(e)
            setPopupState(false)
          }}
        >
          <a href="#with-better">С кинологом лучше</a>
        </li>
        <li
          onClick={(e) => {
            scrollTo(e)
            setPopupState(false)
          }}
        >
          <a href="#why-me">Почему я</a>
        </li>
        <li
          onClick={(e) => {
            scrollTo(e)
            setPopupState(false)
          }}
        >
          <a href="#stages">Этапы дрессировки</a>
        </li>
        <li
          onClick={(e) => {
            scrollTo(e)
            setPopupState(false)
          }}
        >
          <a href="#reviews">Отзывы</a>
        </li>
        <li
          onClick={(e) => {
            scrollTo(e)
            setPopupState(false)
          }}
        >
          <a href="#what-teach">Чему обучаю</a>
        </li>
        <li
          onClick={(e) => {
            scrollTo(e)
            setPopupState(false)
          }}
        >
          <a href="#faq">Частые вопросы</a>
        </li>
      </ul>
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
    </menu>
  )
}

export default PopupMenu
