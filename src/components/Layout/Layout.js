import React, { Component } from 'react'
import Aux from '../../hoc/Aux'
import { Content } from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class Layout extends Component {
  state = {
    showSideDrawer: false
  }
  sideDrawerCloseHandler = () => {
    this.setState(prevState => {
      return { showSideDrawer: !prevState.showSideDrawer }
    })
  }

  render () {
    return (
      <Aux>
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerCloseHandler}
        />
        <Toolbar trigger={this.sideDrawerCloseHandler} />
        <main className={Content}>{this.props.children}</main>
      </Aux>
    )
  }
}

export default Layout
