import { useDispatch, useSelector } from "react-redux"
import { buyIceCream } from "../utils/IceCream"

const IceCream = () => {

  const iceCreamSliceData = useSelector(store => store.iceCream)
  const dispatch = useDispatch()

  return (
    <div>
      <h2>Number of Ice Creams : {iceCreamSliceData.numOfIceCreams}</h2>
      <button onClick={() => {
        dispatch(buyIceCream())
      }}>Buy Ice Cream</button>
    </div>
  )
}

export default IceCream
