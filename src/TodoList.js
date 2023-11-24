import React from 'react'
import './TodoList.css'
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function TodoList({task, toggleComplete, deleteTodo }) {
  return (
    <div className='todo-list'>
        <div className='list'>

            {task.completed ? 
              <CheckCircleIcon 
            className='circle-icon-checked'
            onClick={() => toggleComplete(task.id)} />
            : <CircleOutlinedIcon 
            className='circle-icon'
            onClick={() => toggleComplete(task.id)} />}
            {/* <CircleOutlinedIcon 
            className='circle-icon'
            onClick={() => toggleComplete(task.id)}  /> */}
            {/* <input type='checkbox' className='check-box'/> */}
            <p 
            onClick={() => toggleComplete(task.id)} 
            className={`${task.completed ? 'completed' : ""}`}>{task.text}</p>
            <div className='delete-btn'>
              <button type='button' onClick={() => deleteTodo(task.id)}>x</button>
            </div>
        </div>
        

    </div>
  )
}

export default TodoList