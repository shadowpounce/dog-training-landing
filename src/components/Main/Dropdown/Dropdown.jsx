import React from 'react'

import { ReactComponent as Arrow } from '../../../assets/images/svg/arrow.svg'

const Dropdown = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <li className={`question ${isOpen ? 'question-opened' : ''}`}>
      <div
        className="question__header"
        onClick={() => (isOpen ? setIsOpen(false) : setIsOpen(true))}
      >
        <h4>{question}</h4>
        <Arrow />
      </div>
      <div className="answer">
        <p>{answer}</p>
      </div>
    </li>
  )
}

export default Dropdown
