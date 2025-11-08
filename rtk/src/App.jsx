import React from 'react'
import Cake from './components/Cake'
import IceCream from './components/IceCream'
import User from './components/User'
import { useState } from 'react'
import { Activity } from "react"

const App = () => {
  const[show, setShow] = useState(true)
  return (
    <div>
      {/* <Cake />
      <IceCream />
      <User /> */}



      <button onClick={() => {
        setShow(!show)
      }}>Show / Hide</button>

     {show && <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis, ea consequatur nobis officia rem nam enim! Quo aut dolores similique possimus pariatur cum, quasi nulla perspiciatis consectetur, atque eveniet itaque!</div>}


      <Activity mode={show ? "visible" : "hidden"}>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ut asperiores ipsam perspiciatis fugiat itaque, esse officiis, quaerat suscipit, recusandae molestiae? Cumque dolores culpa a repellendus. Nisi totam aliquam odio.</div>
      </Activity>


      <p>ok</p>
      


    </div>
  )
}

export default App

