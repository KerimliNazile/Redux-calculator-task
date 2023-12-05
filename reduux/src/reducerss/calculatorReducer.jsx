import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state,action) => {

      
      state.value= action.payload.num1+action.payload.num2
    },
    decrement: (state,action) => {
      state.value = action.payload.num1-action.payload.num2
    },
    multiply:(state,action)=>{
        state.value = action.payload.num1*action.payload.num2
    },
    divide:(state,action)=>{
        state.value = action.payload.num1/action.payload.num2
    }
  },
})

export const { increment, decrement, multiply, divide } = counterSlice.actions

export default counterSlice.reducer