import React from 'react'
import { buyCake } from '../Utils/Cake/CakeActions'
import {connect} from "react-redux"

const Cake = (props) => {
  return (
    <div>
      <h1>Number of Cakes : {props.cakeCount}</h1>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    cakeCount : state.cake.numOfCakes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake : () => dispatch(buyCake())
  }
}

// export default Cake
// export default connect(mapStateToProps, mapDispatchToProps)(Cake)

const enhancedComp = connect(mapStateToProps, mapDispatchToProps)
const kucBhi = enhancedComp(Cake)
export default kucBhi
