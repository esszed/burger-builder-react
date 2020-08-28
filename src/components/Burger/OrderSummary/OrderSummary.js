import React from 'react'
import Aux from '../../../hoc/Aux'

const OrderSummary = ({ ingredients }) => {
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
    </Aux>
  )
}

export default OrderSummary
