import React from 'react'
import classes from './Toolbar.module.css'

import NavigationItems from '../NaviationItems/NavigationItems'
import Logo from '../../Logo/Logo'
import HamburgerIcon from '../SideDrawer/HamburgerIcon/HamburgerIcon'

const Toolbar = ({ trigger }) => (
  <header className={classes.Toolbar}>
    <HamburgerIcon click={trigger} />
    <div className={classes.Logo}>
      <Logo />
    </div>

    <nav className={classes.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
)

export default Toolbar
