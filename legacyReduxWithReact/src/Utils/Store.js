import {combineReducers, createStore, applyMiddleware} from "redux"
import { cakeReducer } from "./Cake/CakeReducer"
import { iceCreamReducer } from "./IceCream/IceCreamReducer";
import { composeWithDevTools } from '@redux-devtools/extension';
import {thunk} from "redux-thunk"
import { userReducer } from "./User/UserReducer";
import { buyCake } from "./Cake/CakeActions";
import { buyIceCream } from "./IceCream/IceCreamAction";


const rootReducer = combineReducers({
    cake : cakeReducer,
    iceCream : iceCreamReducer,
    user: userReducer
})

// export const store = createStore(rootReducer, applyMiddleware(thunk))
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
