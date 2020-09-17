import React from 'react'
import { Modal as ModalClass } from './Modal.module.css'
import Aux from '../../../hoc/Aux/Aux'
import Backdrop from '../Backdrop/Backdrop'
const Modal = ({ children, show, clicked, loading }) => (
  <Aux>
    <Backdrop clicked={clicked} show={show} />
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
const areEqual = (prevProps, nextProps) => {
  return (
    prevProps.show === nextProps.show && prevProps.loading === nextProps.loading
  )
}

export default React.memo(Modal, areEqual)
