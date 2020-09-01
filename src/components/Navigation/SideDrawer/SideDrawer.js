import React from 'react'
import Logo from '../../Logo//Logo'
import NavigationItems from '../NaviationItems/NavigationItems'
import classes from './SideDrawer.module.css'
const SideDrawer = () => {
  return (
    <div className={classes.SideDrawer}>
      <Logo />
      <nav>
        <NavigationItems />
      </nav>
    </div>
  )
}

export default SideDrawer
