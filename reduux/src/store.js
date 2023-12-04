import {configureStore} from "@reduxjs/toolkit"
import counterReducer from "./reducerss/calculatorReducer"
import todoListReducer from "./reducerss/todoListReducer"
import calculatorReducer from "./reducerss/calculatorReducer"

export const store = configureStore({
    reducer:{
        counter:counterReducer,
        todos:todoListReducer,
        calculator:calculatorReducer
    }
})
