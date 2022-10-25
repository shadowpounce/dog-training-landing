import React from 'react'
import SectionForm from '../SectionForm/SectionForm'
import Dropdown from './Dropdown/Dropdown'
import { ReactComponent as ReasonFirst } from '../../assets/images/svg/reason1.svg'
import { ReactComponent as ReasonSecond } from '../../assets/images/svg/reason2.svg'
import { ReactComponent as ReasonThird } from '../../assets/images/svg/reason3.svg'
import { ReactComponent as ReasonFourth } from '../../assets/images/svg/reason4.svg'
import { ReactComponent as ReasonFivth } from '../../assets/images/svg/reason5.svg'
import { ReactComponent as ReasonSixth } from '../../assets/images/svg/reason6.svg'
import { ReactComponent as ReasonSeventh } from '../../assets/images/svg/reason7.svg'
import { ReactComponent as ReasonEighth } from '../../assets/images/svg/reason8.svg'
import line from '../../assets/images/pictures/line.png'

import './Main.scss'

window.addEventListener('scroll', () => {
  if (window.pageYOffset >= 120) {
    document.querySelector('nav').classList.add('fixedNav')
  } else if (window.pageYOffset < 120) {
    document.querySelector('nav').classList.remove('fixedNav')
  }
})

const Main = () => {
  return (
    <main className="main">
      <section className="reasons">
        <div className="container">
          <div className="numbers">
            <div>
              <h2 className="section__title">100 людей</h2>
              <span>Обучились дрессировать своих питомцев</span>
            </div>
            <div>
              <h2 className="section__title">200 собак</h2>
              <span>Начали понимать команды</span>
            </div>
            <div>
              <h2 className="section__title">2600 часов</h2>
              <span>Совместных занятий и общения</span>
            </div>
            <div>
              <h2 className="section__title">10 лет</h2>
              <span>Посвятила собакам</span>
            </div>
          </div>
          <h2 className="section__title">Причины дрессировать собаку</h2>

          <div className="reasons-wrapper">
            <div className="box">
              <div className="reason-picture">
                <ReasonFirst />
              </div>
              <p>Гонится за животными</p>
            </div>
            <div className="box">
              <div className="reason-picture">
                <ReasonSecond />
              </div>
              <p>Роняет вещи</p>
            </div>
            <div className="box">
              <div className="reason-picture">
                <ReasonThird />
              </div>
              <p>Грызёт мебель</p>
            </div>
            <div className="box">
              <div className="reason-picture">
                <ReasonFourth />
              </div>
              <p>Сдирает обои</p>
            </div>
            <div className="box">
              <div className="reason-picture">
                <ReasonFivth />
              </div>
              <p>Натянутый поводок </p>
            </div>
            <div className="box">
              <div className="reason-picture">
                <ReasonSixth />
              </div>
              <p>Не ходит в лоток</p>
            </div>
            <div className="box">
              <div className="reason-picture">
                <ReasonSeventh />
              </div>
              <p>Лает на людей</p>
            </div>
            <div className="box">
              <div className="reason-picture">
                <ReasonEighth />
              </div>
              <p>Берет все в рот</p>
            </div>
          </div>
        </div>
      </section>
      <section className="with-better">
        <div className="container">
          <h2 className="section__title">С кинологом лучше</h2>
          <div className="experience-and-time">
            <div>
              <h2 className="title">Опыт работы</h2>
              <p className="subtitle">
                Благодаря многолетнему опыту кинологи легко могут заметить
                недостаточно чёткие жесты, противоречивые команды
                или несвоевременное подкрепление. Так же вы не окажитесь
                в тупике, не зная, как разрешить ту или иную ситуацию.
                Профессионал подскажет простой выход из неё.
              </p>
            </div>
            <div>
              <h2 className="title">Экономия времени</h2>
              <p className="subtitle">
                На поиски нужной информации не уходят недели. 1 час занятий
                и команда лежать уже выучена.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="why-me">
        <div className="container">
          <h2 className="section__title">Почему я</h2>
          <div className="cards">
            <div className="card box">
              <h4 className="card__title">Обучаю всех</h4>
              <h5 className="card__subtitle">
                Обучаю владельцев и их питомцев
              </h5>
              <p className="card__text">
                Возраст владельцев не важен. Щенков приучать начинаю с 4 месяцев
              </p>
            </div>
            <div className="card box">
              <h4 className="card__title">К каждой собаке свой подход</h4>
              <h5 className="card__subtitle">Узнаю сколько питомцу</h5>
              <h5 className="card__subtitle">Был ли опыт в дрессировке</h5>
              <p className="card__text">
                Если был, то я обязательно должна знать как обучали. Так я пойму
                его условные рефлексы, и какие команды питомец уже знает, какие
                стоит обучить или даже заново пройти и зафиксировать результат.
              </p>
              <p className="card__text">
                Если опыта не было я составляю список команд из ваших пожеланий
                и причин.
              </p>
            </div>
            <div className="card box">
              <h4 className="card__title">Опыт работы</h4>

              <p className="card__text">
                <span>200</span> дрессированных собак, получивших{' '}
                <span>350</span> наград на разных соревнованиях
              </p>
              <p className="card__text">
                <span>100</span> людей научились правильно дрессировать
                и общаться со своими питомцами
              </p>
              <p className="card__text">
                <span>2600</span> часов совместных занятий и встреч
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="stages">
        <div className="line">
          <img src={line} alt="" />
        </div>
        <div className="container">
          <h2 className="section__title">Этапы дрессировки</h2>
          <div className="wrapper">
            <div className="stages-row row-1">
              <div className="stage">
                <h1 className="stage__number">01</h1>
                <span>Созван по телефону или общение онлайн</span>
              </div>
              <div className="stage">
                <h1 className="stage__number">02</h1>
                <span>Созван по телефону или общение онлайн</span>
              </div>
              <div className="stage">
                <h1 className="stage__number">03</h1>
                <span>Созван по телефону или общение онлайн</span>
              </div>
              <div className="stage">
                <h1 className="stage__number">04</h1>
                <span>Созван по телефону или общение онлайн</span>
              </div>
            </div>
            <div className="stages-row">
              <div className="stage">
                <h1 className="stage__number">05</h1>
                <span>Созван по телефону или общение онлайн</span>
              </div>
              <div className="stage">
                <h1 className="stage__number">06</h1>
                <span>Созван по телефону или общение онлайн</span>
              </div>
              <div className="stage">
                <h1 className="stage__number">07</h1>
                <span>Созван по телефону или общение онлайн</span>
              </div>
              <div className="stage">
                <h1 className="stage__number">08</h1>
                <span>Созван по телефону или общение онлайн</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SectionForm />
      <section className="reviews">
        <div className="container">
          <h2 className="section__title">Отзывы</h2>
          <div className="reviews-wrapper">
            <div className="review box">
              <p className="review__text">
                Я хочу сказать огромное спасибо вам! Вы были с нами в самый
                сложный момент и только благодаря вам мы смогли преодолеть
                все трудности.
              </p>
              <h6 className="review__author">Леонид Петрович</h6>
            </div>
            <div className="review box">
              <p className="review__text">
                Добрый день. Я хочу поделиться искренними эмоциями после занятий
                с моим любимым кинологом. Она учит понимать, и получать
                удовольствие от жизни с четвероногим другом. Спасибо
                вам ещё раз! Надеюсь, что дальше больше и мы с вами ещё много
                будем вместе радоваться успехам Мари, которых бы не было
                без вас! Она тот специалист, которого я искала несколько
                месяцев.
              </p>
              <h6 className="review__author">Инна Муравьёва</h6>
            </div>
            <div className="review box">
              <p className="review__text">Спасибо вам огромное</p>
              <h6 className="review__author">Александр Н.</h6>
            </div>
          </div>
        </div>
      </section>
      <section className="what-teach">
        <div className="container">
          <h2 className="section__title">Чему обучу</h2>
          <div className="wrapper wrapper-pc">
            <small>Команды</small>
            <div className="commands">
              <div
                data-content="«Перестань тянуть поводок»"
                className="command"
              ></div>
              <div data-content="«Ко мне»" className="command"></div>
              <div data-content="«Рядом»" className="command"></div>
              <div
                data-content="«Трио: сидеть, стоять, лежать»"
                className="command"
              ></div>
              <div data-content="«ФАС»" className="command"></div>
              <div data-content="«ФУ»" className="command"></div>
            </div>
            <big>5000 ₴</big>
          </div>
          <div className="wrapper wrapper-tablet">
            <div className="row row-1">
              <small>Команды</small>
              <div className="commands">
                <div
                  className="command"
                  data-content=" «Перестань тянуть поводок»"
                ></div>
                <div className="command" data-content=" «Рядом»"></div>
                <div className="command" data-content=" «ФАС»"></div>
              </div>
            </div>
            <div className="row row-2">
              <div className="commands">
                <div className="command" data-content=" «Ко мне»"></div>
                <div
                  className="command"
                  data-content=" «Трио: сидеть, стоять, лежать»"
                ></div>
                <div className="command" data-content=" «ФУ»"></div>
              </div>
              <big>5000 ₴</big>
            </div>
          </div>
          <div className="wrapper wrapper-mobile">
            <div className="col col-1">
              <small>команды</small>
              <div className="commands-column">
                <div className="group">
                  <span>«Ко мне»</span>
                  <div className="command"></div>
                </div>
                <div className="group">
                  <span>«Трио: сидеть, стоять, лежать»</span>
                  <div className="command"></div>
                </div>
                <div className="group">
                  <span>«ФАС»</span>
                  <div className="command"></div>
                </div>
              </div>
            </div>
            <div className="col col-2">
              <div className="commands-column">
                <div className="group">
                  <span>«Перестань тянуть поводок»</span>
                  <div className="command"></div>
                </div>
                <div className="group">
                  <span>«Рядом»</span>
                  <div className="command"></div>
                </div>
                <div className="group">
                  <span>«ФУ»</span>
                  <div className="command"></div>
                </div>
              </div>
              <big>5000 ₴</big>
            </div>
          </div>
        </div>
      </section>
      <SectionForm />
      <section className="faq">
        <div className="container">
          <h2 className="section__title">Ответы на частые вопросы</h2>
          <ul className="questions-and-answers">
            <Dropdown
              question={'Можно ли онлайн обучить собаку?'}
              answer={'Да, можно.'}
            />
            <Dropdown
              question={'Как происходит оплата?'}
              answer={'Наличными или же на карту.'}
            />
            <Dropdown
              question={'Будет ли дальнейшее общение после занятий?'}
              answer={
                'Да, будет. У меня есть чат. Там всё беседуют, задают друг другу вопросы. Присылают как они занимаются или повторяют всё дома.'
              }
            />
            <Dropdown
              question={'Что если не получится?'}
              answer={'Получится'}
            />
            <Dropdown
              question={'Что я получу в конце?'}
              answer={'Дрессированую собаку'}
            />
          </ul>
        </div>
      </section>
    </main>
  )
}

export default Main
