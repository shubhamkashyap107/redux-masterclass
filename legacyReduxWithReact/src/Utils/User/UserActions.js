import axios from "axios"
export const FETCH_USER_REQUEST = "FETCH_USER_REQUEST"
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS"
export const FETCH_USER_FAILURE = "FETCH_USER_FAILURE"


export function fetchUserRequest()
{
    return {
        type : FETCH_USER_REQUEST
    }
}

export function fetchUserSuccess(data)
{
    return {
        type : FETCH_USER_SUCCESS,
        payload : data
    }
}

export function fetchUserFailure(error)
{
    return {
        type : FETCH_USER_FAILURE,
        payload : error
    }
}


export function fetchUsers()
{
    return (dispatch) => {
        dispatch(fetchUserRequest())
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
            dispatch(fetchUserSuccess(res.data))
        })
        .catch((err) => {
            dispatch(fetchUserFailure(err.message))
        })
    }
}