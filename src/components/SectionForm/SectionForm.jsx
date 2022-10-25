import React from 'react'

import styles from './SectionForm.module.scss'

import Input from '../UI/Input/Input'
import InputCheck from '../UI/InputCheck/InputCheck'
import Button from '../UI/Button/Button'

const SectionForm = () => {
  return (
    <section className={styles.form}>
      <div className={`container ${styles.container}`}>
        <div className={styles.formInputs}>
          <Input placeholder={'Ваше имя'} type={'text'} />
          <Input placeholder={'Ваша почта'} type={'email'} />
        </div>
        <div className={styles.formSubmit}>
          <div>
            <InputCheck id="checkbox" />
            <label htmlFor="checkbox">
              Соглашаюсь с <a href="#">условиями</a> обработки данных
            </label>
          </div>
          <Button />
        </div>
      </div>
    </section>
  )
}

export default SectionForm
