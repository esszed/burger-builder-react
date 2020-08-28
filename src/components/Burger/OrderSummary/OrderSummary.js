import React from 'react'
import Aux from '../../../hoc/Aux'
import Button from '../../UI/Button/Button'
const OrderSummary = ({ ingredients, cancel, cont }) => {
  const ingredientSummary = Object.keys(ingredients).map(igKey => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: 'capitalize' }}>{igKey}</span>:
        {ingredients[igKey]}
      </li>
    )
  })
  return (
    <Aux>
      <h3>Your order</h3>
      <p>Your ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>Checkout?</p>
      <Button btnType='Danger' clicked={cancel}>
        CANCEL
      </Button>
      <Button btnType='Success' clicked={cont}>
        CONTINUE
      </Button>
    </Aux>
  )
}

export default OrderSummary
