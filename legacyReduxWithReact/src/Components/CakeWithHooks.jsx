import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from '../Utils/Cake/CakeActions'

const CakeWithHooks = () => {
    const val = useSelector(store => store.cake.numOfCakes)
    const dispatch = useDispatch()
  return (
    <div>
      <h1>Number of Cakes :{val} </h1>
      <button onClick={() => {
        dispatch(buyCake())
      }}>Buy Cake</button>
    </div>
  )
}

export default CakeWithHooks
