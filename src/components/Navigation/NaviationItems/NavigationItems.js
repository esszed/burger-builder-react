import React from 'react'
import NavigationItem from './NavigationItem/NavigationItem'
import {NavigationItems as NavigationItemsClass} from './NavigationItems.module.css'

const NavigationItems = () => (
  <ul className={NavigationItemsClass}>
 
      <NavigationItem link={'/'} active>Burger Builder</NavigationItem>
      <NavigationItem link={'/'} >Checkout</NavigationItem>
    
  </ul>
)


export default NavigationItems
