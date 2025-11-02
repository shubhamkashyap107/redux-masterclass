import React from 'react'
import { buyIceCream } from '../Utils/IceCream/IceCreamAction'
import { connect } from "react-redux"

const IceCream = (props) => {
  return (
    <div>
      <h1>Number of IceCreams : {props.iceCreamCount}</h1>
      <button onClick={props.buyIc}>Buy Ice Cream</button>
    </div>
  )
}

const mapStateToProps = (state) => {
    return {
        iceCreamCount : state.iceCream.numOfIceCreams
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyIc : () => dispatch(buyIceCream())
    }
}

// export default IceCream
export default connect(mapStateToProps, mapDispatchToProps)(IceCream)