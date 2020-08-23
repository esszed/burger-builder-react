import React from 'react'
import Aux from '../../hoc/Aux'

import { Content } from './Layout.module.css'

const layout = ({ children }) => (
  <Aux>
    <div> Layout Test </div>
    <main className={Content}>{children}</main>
  </Aux>
)

export default layout
