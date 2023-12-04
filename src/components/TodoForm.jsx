import React,{useState,useEffect} from 'react'
import {toast} from 'react-toastify';


export default function TodoForm({setTodos,todos}) {
    const [todoValue, setTodoValue] = useState('');

    const handleSubmit = (e) => {
        

        if(todoValue === '') {
            toast.error('Plaese enter a todo!');
        } else if (todos.includes(todoValue)) {
            toast.error('Todo already exisit !');
        } else if (todoValue.length < 3) {
            toast.error('Todo must be at least 3 characters long!');
        } else {
            setTodos([...todos, todoValue]);
            toast.success('Todo Added !');
        }
    }

  return (
    <>
    <h1>Todo App</h1>
    <form id='todo-form'>
        <input type="text" id='form-input' placeholder='Please Enter Your Todo' onChange={(e) => setTodoValue(e.target.value)} value={todoValue} />
        <button onClick={(e) => {
            e.preventDefault();
            handleSubmit();
            setTodoValue('');
        }}>
            <i className="fas fa-plus"></i>
        </button>

    </form>
    </>
    
  )
}
