import { useDispatch, useSelector } from "react-redux"
import { buyCake } from "../utils/CakeSlice"

const Cake = () => {
    const cakeSliceData = useSelector((store) => {
        return store.cake
    })
    const dispatch = useDispatch()
  return (
    <div>
      <h2>Number of cakes : {cakeSliceData.numOfCakes}</h2>
      <button onClick={() => {
        dispatch(buyCake())
      }} >Buy Cake</button>
    </div>
  )
}

export default Cake
