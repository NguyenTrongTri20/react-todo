import {configureStore} from  "@reduxjs/toolkit"
import TodoList from './reducers/TodoSlice'
import FormState from './reducers/FormSlice'

const store = configureStore({
    reducer:{
        TodoList,
        FormState
    }
})

export default store