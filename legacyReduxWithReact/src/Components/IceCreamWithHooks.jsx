import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyIceCream } from '../Utils/IceCream/IceCreamAction'

const IceCreamWithHooks = () => {
    const data = useSelector(store => store.iceCream.numOfIceCreams)
    const dispatch = useDispatch()
  return (
    <div>
      <h1>Number of IceCreams : {data}</h1>
      <button onClick={() => {
        dispatch(buyIceCream())
      }} >Buy Ice Cream</button>
    </div>
  )
}

export default IceCreamWithHooks
