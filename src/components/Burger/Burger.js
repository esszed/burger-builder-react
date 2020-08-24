import React from 'react'
import classes from './Burger.module.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredients'
const Burger = () => {
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type='bread-top' />
      <BurgerIngredient type='cheese' />
      <BurgerIngredient type='bacon' />
      <BurgerIngredient type='meat' />
      <BurgerIngredient type='salad' />
      <BurgerIngredient type='bread-bottom' />
    </div>
  )
}

export default Burger
