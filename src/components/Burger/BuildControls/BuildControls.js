import React from 'react'
import BuildControl from './BuildControl/BuildControl'
import classes from './BuildControls.module.css'

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' }
]

const BuildControls = ({
  ingredientAdded,
  ingredientRemoved,
  disabled,
  price,
  purchasable,
  ordered
}) => (
  <div className={classes.BuildControls}>
    <p>Current price: <strong>{price.toFixed(2)}</strong></p>
    {controls.map(ctrl => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        removed={() => ingredientRemoved(ctrl.type)}
        added={() => ingredientAdded(ctrl.type)}
        disabled={disabled[ctrl.type]}
      />
    ))}
    <button onClick={ordered} className={classes.OrderButton} disabled={!purchasable} >ORDER NOW</button>
  </div>
)

export default BuildControls
