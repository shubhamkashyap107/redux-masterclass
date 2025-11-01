import axios from "axios"
import { applyMiddleware, combineReducers, createStore } from "redux"
import reduxLogger from "redux-logger"
const{createLogger} = reduxLogger
import { thunk } from "redux-thunk"


const BUY_CAKE = "BUY_CAKE"
const RESTOCK_CAKE = "RESTOCK_CAKE"
const BUY_ICECREAM = "BUY_ICECREAM"
const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST"
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS"
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE"

const fetchUserRequest = () => {
    return {
        type : FETCH_USERS_REQUEST
    }
}

const fetchUserSuccess = (data) => {
    return {
        type : FETCH_USERS_SUCCESS,
        payload : data
    }
}

const fetchUserFailure = (error) => {
    return {
        type : FETCH_USERS_FAILURE,
        payload : error
    }
}

const initialUsersState = {
    data : [],
    loading : false,
    error : null
}

function fetchUsers()
{
    return (dispatch) => {
        dispatch(fetchUserRequest())
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
            dispatch(fetchUserSuccess(response.data))
        })
        .catch((error) => {
            dispatch(fetchUserFailure(error))
        })
    }
}


const userReducer = (state = initialUsersState, action) => {
    switch(action.type)
    {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading : true
            }

        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                loading : false,
                data : action.payload
            }

        case FETCH_USERS_FAILURE:
            return {
                ...state,
                error : action.payload
            }

        default:
            return state
    }
}





function buyCake() {
    return { type: BUY_CAKE }
}

function restockCake(num) {
    return { type: RESTOCK_CAKE, payload: num }
}

function buyIceCream() {
    return { type: BUY_ICECREAM }
}

const initialCakeState = { numOfCakes: 20 }

const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return { numOfCakes: state.numOfCakes - 1 }
        case RESTOCK_CAKE:
            return { numOfCakes: state.numOfCakes + (action.payload || 1) }
        default:
            return state
    }
}

const initialIceCreamState = { numOfIceCreams: 40 }

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
        case BUY_ICECREAM:
            return { numOfIceCreams: state.numOfIceCreams - 1 }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user : userReducer
})

const logger = createLogger()

const store = createStore(rootReducer, applyMiddleware( thunk))

console.log("Initial State", store.getState())
const unsubscribe = store.subscribe(() => console.log("Updated State", store.getState()))

// store.dispatch(buyCake())
// store.dispatch(buyCake())
// store.dispatch(buyCake())
// store.dispatch(buyIceCream())
// store.dispatch(buyIceCream())
// store.dispatch(buyIceCream())
// store.dispatch(buyIceCream())
// store.dispatch(buyIceCream())
store.dispatch(fetchUsers())
// unsubscribe()
