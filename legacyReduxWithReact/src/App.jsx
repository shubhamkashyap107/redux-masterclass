import React from 'react'
import Cake from './Components/Cake'
import CakeWithHooks from './Components/CakeWithHooks'
import IceCream from './Components/IceCream'
import IceCreamWithHooks from './Components/IceCreamWithHooks'
import User from './Components/User'

const App = () => {
  return (
    <div>
      {/* <Cake /> */}
      <CakeWithHooks />
      {/* <IceCream /> */}
      <IceCreamWithHooks />
      {/* <User /> */}
    </div>
  )
}

export default App
