import React from 'react'
import Vegetable from './Vegetable';

const Vegetables = () => {
  return (
    <div>
      <h1>Vegetables</h1>
      <Vegetable name="Tomato" qty="10" />
      <Vegetable name="Potatoes" qty="8" />
      <Vegetable name="Carrots" qty="5" />
      <Vegetable name="Onions" qty="7" />
    </div>
  )
}

export default Vegetables;