import React,{useState} from 'react'

function TodoItem({todo,deleteTodo,id}) {
    const [checked, setChecked] = useState(false);

    const handleCheck = () => {
        setChecked(!checked);
    }
  return (
    <div className={checked ? 'checked' : 'todo-items'}>
        <p>{todo}</p>
        <div>
            <i className="fa-solid fa-check" onClick={handleCheck}></i>
            <i className="fas fa-times circle" onClick={() => {deleteTodo(id)}}></i>
        </div>
    </div>
  )
}

export default TodoItem
