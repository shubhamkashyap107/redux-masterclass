import { createSlice } from "@reduxjs/toolkit"
import { buyCake } from "./CakeSlice"

const iceCreamSlice = createSlice({
    name : "iceCreamSlice",
    initialState : {
        numOfIceCreams : 100
    },
    reducers : {
        buyIceCream : (state, action) => {
            return {
                numOfIceCreams : state.numOfIceCreams - 1
            }
        }
    },
    extraReducers : (builder) => {
        builder.addCase(buyCake(), (state) => {
            return {
                numOfIceCreams : state.numOfIceCreams - 1
            }
        })
    }
})

export default iceCreamSlice.reducer
export const{ buyIceCream } = iceCreamSlice.actions