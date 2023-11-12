import React from 'react';
import './Home.css';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import { useState } from 'react';
import TodoList from './TodoList';


function Home() {

  const [todo, setTodo] = useState(''); // 'Take the dog for a walk'
  const [todos, setTodos] = useState([]); // [ {todo}, {todo}, {todo} ]

 const handleSubmit = (e) => {
    e.preventDefault();
    todo.trim() === '' ? alert('Please enter a todo') :
    addTodo(todo);
    setTodo('');
 } 

 const addTodo = todo => {
    setTodos([...todos, {id: Date.now(), text: todo, completed: false}]);
  }

  const toggleComplete = (id) => { 
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          }
        }
        return todo;
      })
    )
  }
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }


  return (
    <div className='home'>
          <form className='todo-form' onSubmit={handleSubmit}>
            <div className='todo-input'>
              <CircleOutlinedIcon className='circle-icon' />
              <input type='text'
                      placeholder='Create a new todo...'
                      onChange={(e) => setTodo(e.target.value)}
                      value={todo}
              />
            </div>
            <div className='todo-list'>
              {todos.map((todo, index) => (
                <TodoList task={todo} key={index} 
                toggleComplete={toggleComplete} 
                deleteTodo={deleteTodo}/>
              ))}      
            </div>
            
            <div className='todo-footer'>
              <p>{todos.length} items left</p>
              <p>Clear Completed</p>
            </div>
          </form>
        
    </div>
  )
}

export default Home