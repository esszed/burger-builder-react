import React from 'react'
import { DrawerToggle } from './HamburgerIcon.module.css'
const HamburgerIcon = ({ click }) => (
  <div className={DrawerToggle} onClick={click}>
    <div ></div>
    <div></div>
    <div></div>
  </div>
)

export default HamburgerIcon
