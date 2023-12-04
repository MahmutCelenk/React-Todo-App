import {useState} from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [todos, setTodos] = useState([]);

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo,index) => index !== id));
  }
  return (
    <>
      <ToastContainer/>
        <TodoForm setTodos={setTodos} todos={todos} />
        <TodoList todos={todos} deleteTodo={deleteTodo} />  
    </>
  );
}

export default App;
