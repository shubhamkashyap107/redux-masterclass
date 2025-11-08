import { BUY_CAKE } from "./CakeActions"

const initialCakeState = {
    numOfCakes : 20
}



export const cakeReducer = (state = initialCakeState, action) => {
    switch(action.type)
    {
        case BUY_CAKE:
            // return {
            //     numOfCakes : state.numOfCakes - 1
            // }
            state.numOfCakes--
            return state

        default:
            return state
    }
}

