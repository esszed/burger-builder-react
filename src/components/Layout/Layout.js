import React from 'react'
import Aux from '../../hoc/Aux'
import { Content } from './Layout.module.css'
import Burger from '../Burger/Burger'
const layout = ({ children }) => (
  <Aux>
    <div> Layout Test </div>
    <main className={Content}>{children}</main>
    <Burger></Burger>
  </Aux>
)

export default layout
