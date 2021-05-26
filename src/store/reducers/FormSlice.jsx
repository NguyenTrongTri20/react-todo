import {createSlice} from "@reduxjs/toolkit"

const FormSlice = createSlice({
    name:"form",
    initialState:{
        isDisplayForm: false,
        todoEditId: null
    },
    reducers:{
        toggleForm(state){
            state.isDisplayForm = !state.isDisplayForm
        },
        openForm(state, action){
            state.todoEditId = action.payload || null
            state.isDisplayForm = true
        },
        closeForm(state){
            state.isDisplayForm = false
            state.todoEditId = null
        }
    }
})

const {reducer, actions} = FormSlice

export const { toggleForm, openForm, closeForm } = actions

export default reducer