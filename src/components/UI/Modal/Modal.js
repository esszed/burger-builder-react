import React from 'react'
import { ModalClass } from './Modal.module.css'
import Aux from '../../../hoc/Aux'
import Backdrop from '../Backdrop/Backdrop'
const Modal = ({ children, show, clicked }) => (
    <Aux>
    <Backdrop clicked={clicked} show={show}/>
  <div
    style={{
      transform: show ? 'translateY(0)' : 'translateY(-100vh)',
      opacity: show ? 1 : 0
    }}
    className={ModalClass}
  >
    {children}
  </div>
  </Aux>
)

export default Modal
