import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import  { closeForm } from '../store/reducers/FormSlice'
import { addTodo, updateTodo } from '../store/reducers/TodoSlice'


function TodoForm(props) {

  const dispatch = useDispatch()
  const inputElement = useRef()
  const {todoEditId} = useSelector(state => state.FormState)
  const todoList =  useSelector(state => state.TodoList)
  
  const [todo, setTodo] = useState({
    title:"",
    completed:false
  })
  useEffect(()=>{
    
    if(todoEditId){
      let index = todoList.findIndex(todo => todo.id === todoEditId)
      const todo = todoList[index]
      setTodo(todo)
    }else{
      setTodo ({
        title:"",
        completed:false
      })
    }
    

  },[todoEditId,todoList])

  useEffect(()=>{
    inputElement.current.focus()
  })

  const {title, completed} = todo

  
  const onCloseForm = () => {
    const action = closeForm()
    dispatch(action)
  }

  const onValueChange = e => {
    let name = e.target.name
    let value = e.target.value


    setTodo({
      ...todo,
      [name]:value
    })
  }

  const onSubmitTodo = () =>{
    
    if(todoEditId){
      const update = updateTodo(todo)
      dispatch(update)

    }else{
      const add = addTodo(todo)
      dispatch(add)
      setTodo({
        title:"",
        completed:false
      })
    }

    
  }
  return (
      <>
        <div className="form-group">
          <div className="title-form">
            {todoEditId ? "Sửa" : "Thêm"} công việc
          </div>
          <div className="body-form">
            <label >Tên:</label>
            <input 
              type="text" 
              className="form-control"  
              placeholder="Ví dụ: học bài"
              name="title"
              onChange={onValueChange}
              value={title}
              ref={inputElement}
            />
            <label> Trạng thái</label>
            <select 
              className="form-select" 
              aria-label="Default select example"
              name="completed"  
              value={completed}
              onChange={onValueChange}
            >
              
              <option value={true} >Hoàn thành</option>
              <option value={false}>Chưa hoàn thành</option>
              
            </select>

            <div className="button-group">
            <button 
              type="button" 
              className="btn btn-success"
              onClick={onSubmitTodo}
            >
              {todoEditId ? "Sửa" : "Thêm"}
            
            </button>

            <button 
              type="button" 
              className="btn btn-danger" 
              onClick={onCloseForm}  
            >Hủy</button>
            </div>
          </div>
        </div>
          
      </>
  );
}

export default TodoForm;