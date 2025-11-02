import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "./UserActions"

const initialUserState = {
    loading : false,
    data : [],
    error : null
}

export const userReducer = (state = initialUserState, action) => {
    switch(action.type)
    {
        case FETCH_USER_REQUEST:
            return {
                ...state, 
                loading : true
            }

        case FETCH_USER_SUCCESS:
            return {
                ...state,
                loading : false,
                data : action.payload
            }
        
        case FETCH_USER_FAILURE:
            return {
                ...state,
                loading : false,
                error : action.payload
            }

        default:
            return state
    }
}