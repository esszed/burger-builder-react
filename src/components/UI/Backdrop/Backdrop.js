import React from 'react'
import {BackdropClass} from './Backdrop.module.css'
const Backdrop = ({show, clicked})=>(
    show && <div className={BackdropClass} onClick={clicked}></div> 
)

export default Backdrop