import React from 'react'

import SocialLink from '../UI/SocialLink/SocialLink'
import Button from '../UI/Button/Button'
import PopupMenu from '../PopupMenu/PopupMenu'

import styles from './Header.module.scss'

import { ReactComponent as Hamburger } from '../../assets/images/svg/hamburger.svg'
import logo from '../../assets/images/svg/logo.svg'
import headerImage from '../../assets/images/pictures/main.png'
import instLogo from '../../assets/images/svg/instagram.svg'
import facebookLogo from '../../assets/images/svg/facebook.svg'
import vkLogo from '../../assets/images/svg/vk.svg'
import tgLogo from '../../assets/images/svg/tg.svg'

function scrollTo(e) {
  let link = e.target.querySelector('a').href
  let sliceAfter = link.indexOf('#')
  window.scroll({
    left: 0,
    top: document.querySelector(`.${link.slice(sliceAfter + 1)}`).offsetTop,
    behavior: 'smooth',
  })
}

const Header = () => {
  const [popupMenuState, setPopupMenuState] = React.useState(false)

  return (
    <header className={styles.header}>
      {popupMenuState && (
        <PopupMenu setPopupState={setPopupMenuState} scrollTo={scrollTo} />
      )}
      <div className="container">
        <nav
          className={`${styles.headerNav} ${
            popupMenuState && `${styles.headerNav}`
          }`}
        >
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
          <ul className={styles.navList}>
            <li onClick={(e) => scrollTo(e)}>
              <a href="#reasons">Причины дрессировки</a>
            </li>
            <li onClick={(e) => scrollTo(e)}>
              <a href="#with-better">С кинологом лучше</a>
            </li>
            <li onClick={(e) => scrollTo(e)}>
              <a href="#why-me">Почему я</a>
            </li>
            <li onClick={(e) => scrollTo(e)}>
              <a href="#stages">Этапы дрессировки</a>
            </li>
            <li onClick={(e) => scrollTo(e)}>
              <a href="#reviews">Отзывы</a>
            </li>
            <li onClick={(e) => scrollTo(e)}>
              <a href="#what-teach">Чему обучаю</a>
            </li>
            <li onClick={(e) => scrollTo(e)}>
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
          <div
            onClick={() => {
              popupMenuState
                ? setPopupMenuState(false)
                : setPopupMenuState(true)
            }}
            className={`${styles.hamburger} ${
              popupMenuState && `${styles.hamburgerOpened}`
            }`}
          >
            <Hamburger />
          </div>
        </nav>
        <main className={styles.headerMain}>
          <div className={styles.textContent}>
            <h1 className={styles.title}>
              <span>1 час</span> занятий с любимцем, под руководством кинолога
            </h1>
            <h4 className={styles.subtitle}>
              Сохранят нервные клетки и порядок в доме
            </h4>
            <Button />
          </div>
          <img src={headerImage} alt="" />
        </main>
      </div>
    </header>
  )
}

export default Header
