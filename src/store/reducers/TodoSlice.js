import {createSlice, nanoid} from "@reduxjs/toolkit"

const TodoSlice = createSlice({
    name:"TodoList",
    initialState:[
        {
            id:nanoid(),
            title:"Chơi game",
            completed: false
        },
        {
            id:nanoid(),
            title:"Học bài",
            completed: true
        },
        {
            id:nanoid(),
            title:"Ngủ",
            completed: false
        }
    ],
    reducers:{
        addTodo:{
            reducer(state, action){
                state.push(action.payload)
            },
            prepare(todo){
                return {
                    payload:{
                        id:nanoid(),
                        ...todo,
                        completed:JSON.parse(todo.completed)
                    }
                }
            },
        },
        toggleStatus(state, action){
            const todoId = action.payload
            state = state.map(todo => {
                if(todo.id === todoId){
                    todo.completed = !todo.completed
                }
                return todo
            })
        },
        deleteTodo(state,action){
            const todoId = action.payload
            let index = state.findIndex(todo => todo.id === todoId)
            state.splice(index, 1)
            
        },
        updateTodo(state,action){
            const todoEdit = action.payload
            let index = state.findIndex(todo => todo.id === todoEdit.id)
            state[index] = todoEdit
        }
    }
})

const {reducer, actions} = TodoSlice


export const { addTodo, toggleStatus, deleteTodo, updateTodo } = actions


export default reducer