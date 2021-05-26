import React from 'react';
import {useDispatch} from 'react-redux'
import { openForm } from '../store/reducers/FormSlice'

function AddTodo(props) {


    const dispatch = useDispatch()

    const onToggleForm = () => {
        dispatch(openForm())
    }

    return (
        <>
            <button 
                type="button" 
                className="btn btn-success"
                onClick={onToggleForm}    
            >Thêm công việc</button> 
        </>
    );
}

export default AddTodo;