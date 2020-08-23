import React from 'react'
import Aux from '../../hoc/Aux'
 
 const layout =({children})=>( 

    <Aux>
     <div> Layout Test  </div>
    <main>{children}</main>
    </Aux>
 )

 export default layout