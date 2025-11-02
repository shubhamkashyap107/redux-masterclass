import { BUY_CAKE } from "../Cake/CakeActions"
import { BUY_ICECREAM } from "./IceCreamAction"

const initialIceCreamState = {
    numOfIceCreams : 40
}

export const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch(action.type)
    {
        // case BUY_ICECREAM:
        //     return {
        //         numOfIceCreams : state.numOfIceCreams - 1
        //     }

        // case BUY_CAKE:
        //     return {
        //         numOfIceCreams : state.numOfIceCreams - 1
        //     }


        case BUY_ICECREAM:
        case BUY_CAKE:
            return {
                numOfIceCreams : state.numOfIceCreams - 1
            }

        
        default:
            return state
    }
}