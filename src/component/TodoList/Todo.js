import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleStatus, deleteTodo } from '../../store/reducers/TodoSlice'
import { openForm } from '../../store/reducers/FormSlice'

const style ={
    width: "50px",
    height: "20px",
    cursor: "pointer"
}

function Todo(props) {

    
    const {todo, index} = props
    const {title, completed} = todo

    const dispatch = useDispatch()

    const onChangeStatus = todoId => {
        const action = toggleStatus(todoId)
        dispatch(action)
    }

    const onDeleteTodo = todoId => {
        const action = deleteTodo(todoId)
        dispatch(action)
    }

    const onEditTodo = todoId => {
        const action = openForm(todoId)
        
        dispatch(action)
    }
    return (
        <>
            <tr className={completed ? "completed" : ""}>
                <td>{index + 1}</td>
                <td>{title}</td>
                <td> <input 
                        type="checkbox" 
                        checked={completed ? true : false} 
                        style={style} 
                        onChange={()=>onChangeStatus(todo.id)}
                    /> 
                </td>
                <td style={{backgroundColor:"white"}}>
                <button 
                    type="button" 
                    className="btn btn-success"
                    onClick={()=>onEditTodo(todo.id)}
                >
                    Sửa
                    
                </button>

                <button 
                    type="button" 
                    className="btn btn-danger"
                    onClick={()=>onDeleteTodo(todo.id)}
                >
                    Xóa
                
                </button>
                </td>
            </tr>
        </>
    );
}

export default Todo;