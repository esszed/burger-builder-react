import React from 'react'
import classes, { ButtonClass } from './Button.module.css'

const Button = ({ clicked, children, btnType }) => (
  <button
    onClick={clicked}
    className={[ButtonClass, classes[btnType]].join(' ')}
  >
    {children}
  </button>
)

export default Button
