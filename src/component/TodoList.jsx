import React, { Fragment, useState } from 'react';

import Todo from './TodoList/Todo';
import SearchForm from './Control/SearchForm';
import SearchDropdown from './Control/SearchDropdown';

import {useSelector} from 'react-redux'

function TodoList() {

  const [filter, setFilter] = useState({
    title:"",
    completed:-1
  })

  let todoList = useSelector(state => state.TodoList)
  
  const onFilter = (filterValue) =>{
    const newFilter = {
      ...filter,
      ...filterValue
    }
    setFilter(newFilter)

  }

  todoList = filterTodo(todoList, filter)
  
  
  const element = todoList.map((todo,index) => {
    return <Todo 
            key={todo.id}
            todo = {todo}
            index={index}
          />
  })

  return (
      <Fragment>
        <table className="table table-bordered table-hover">
          <tbody>
            <tr>
              <td>STT</td>
              <td>Tên</td>
              <td>Trạng thái</td>
              <td>Hành động</td>
            </tr>
            <tr>
                <td></td>
                <td> 
                <SearchForm 
                    onFilter={onFilter}
                /> 
                </td>
                <td>
                <SearchDropdown 
                    onFilter={onFilter}
                />
                </td>
                <td>
                
                </td>
            </tr>
            {element}
          </tbody>
        </table>  
      </Fragment>
  );
}

export default TodoList;


const filterTodo = (todoList, filter) => {
  if(filter.title){
    todoList = todoList.filter(todo => {
      return todo.title.toLowerCase().indexOf(filter.title.toLowerCase()) !== -1
    })
  }
  if(filter.completed === 1){
    todoList = todoList.filter(todo => {
      return todo.completed === true
    })
  }else if(filter.completed === 0){
    todoList = todoList.filter(todo => {
      return todo.completed === false
    })
  }
  return todoList
}