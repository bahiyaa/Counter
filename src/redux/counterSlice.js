import { createSlice } from "@reduxjs/toolkit";

 export const counterSlice=createSlice({
    name:'counterApp',
    initialState:{
        value:1
    },reducers:{
        // logic to update the value
        // actions are created inside the reducers
        increment:(state)=>{
            state.value=state.value+1
        },
        decrement:(state)=>{
            state.value-=1
        },
        reset:(state)=>{
            state.value=0;
        }
    }
})

export const {increment,decrement,reset}=counterSlice.actions;
export default counterSlice.reducer