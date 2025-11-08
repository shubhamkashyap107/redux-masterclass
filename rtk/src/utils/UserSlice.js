import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"



export const getUserData = createAsyncThunk("xyz/kuchbhi", async() => {

        const res = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await res.json()
        return data


})


const userSlice = createSlice({
    name : "userSlice",
    initialState : {
        loading : false,
        error : null,
        data : []
    },
    reducers : {},
    extraReducers : (builder) => {
        builder
        .addCase(getUserData.pending, (state) => {
            return {
                ...state,
                loading : true
            }
        })
        .addCase(getUserData.fulfilled, (state, action) => {
            return {
                ...state,
                loading : false,
                data : action.payload
            }
        })
        .addCase(getUserData.rejected, (state, action) => {
 
            return {
                ...state,
                loading : false,
                error : action.error.message
            }
        })
    }
})


export default userSlice.reducer