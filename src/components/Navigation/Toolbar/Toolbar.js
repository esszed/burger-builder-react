import React from 'react'
import { Toolbar as ToolbarClass } from './Toolbar.module.css'
import Logo from '../../Logo/Logo'

const Toolbar = () => (
  <header className={ToolbarClass}>
    <div>MENU</div>
    <Logo/> 
    <nav>...</nav>
  </header>
)

export default Toolbar
