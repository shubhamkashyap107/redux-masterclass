import { createSlice } from "@reduxjs/toolkit";

const cakeSlice = createSlice({
    name : "cakeslice", // not slice name
    initialState : {
        numOfCakes : 30
    },
    reducers : {
        buyCake : (state, action) => {
            return {
                numOfCakes : state.numOfCakes - 1
            }
        }
    }
})

export default cakeSlice.reducer
export const{ buyCake } = cakeSlice.actions

