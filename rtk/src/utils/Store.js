import { combineReducers, configureStore } from "@reduxjs/toolkit"
import cakeReducer from "./CakeSlice"
import iceCreamReducer from "./IceCream"
import userSliceReducer from "./UserSlice"

const store = configureStore({
    reducer : {
        cake : cakeReducer,
        iceCream : iceCreamReducer,
        user : userSliceReducer
    }
})

export default store


// combineReducers({
//     cake : cakeReducer,
//     iceCream : iceCreamReducer
// })