import React from 'react'
import { ModalClass } from './Modal.module.css'
const Modal = ({ children, show }) => (
  <div
    style={{
      transform: show ? 'translateY(0)' : 'translateY(-100vh)',
      opacity: show ? 1 : 0
    }}
    className={ModalClass}
  >
    {children}
  </div>
)

export default Modal
