import React from 'react'
import './TodoList.css'
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';

function TodoList({task, toggleComplete }) {
  return (
    <div className='todo-list'>
        <div className='list'>
            <CircleOutlinedIcon className='circle-icon' />
            {/* <input type='checkbox' className='check-box'/> */}
            <p onClick={() => toggleComplete(task.id)} className={`${task.completed ? 'completed' : ""}`}>{task.text}</p>
        </div>
        

    </div>
  )
}

export default TodoList