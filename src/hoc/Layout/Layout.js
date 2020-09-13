import React, { Component } from 'react'
import Aux from '../Aux/Aux'
import { Content } from './Layout.module.css'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'

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
