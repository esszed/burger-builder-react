import React from 'react'
import burgerLogo from '../../assets/Images/burger-logo.png'
import {Logo as LogoClass} from './Logo.module.css'
const Logo = () => (
  <div className={LogoClass}>
    <img src={burgerLogo} alt='BurgerBuilder'></img>
  </div>
)

export default Logo
