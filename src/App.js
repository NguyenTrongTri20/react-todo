
import './App.css';
import AddTodo from './component/AddTodo';
import TodoForm from './component/TodoForm';
import TodoList from './component/TodoList.jsx';
import {useSelector} from 'react-redux'

function App() {

  const formState = useSelector(state => state.FormState)

  

  return (
    <div className="App">
      <h1>Quản lý công việc</h1>
      <div className="grid">
        <hr />
        <div className="control">
          <AddTodo />         
        </div>
        <div className="container">
          <div className="row">
            <div className={formState.isDisplayForm ? "col-sm-4" : "hidden"}>
            <TodoForm />
            </div>
            

            <div className={formState.isDisplayForm ? "col-sm-8" : "col-sm-12"}>
            <TodoList />
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
