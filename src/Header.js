import { React, useState } from 'react'
import './Header.css'


function Header() {

    const [theme, setTheme] = useState('light'); // 'light' | 'dark'
    

  return (
    <div className='header'>
        
        <div className='header-text'>
            <h1>TODO</h1>
            <button 
            className='btn'
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            aria-label={`Switch to ${theme === 'light' ?
             'dark' : 'light'} mode`}
            >
              {theme === 'dark' ? 
              <img src='./images/icon-sun.svg'/>
              : <img src='./images/icon-moon.svg'/>}
            </button>
            
        </div>
    </div>
  )
}

export default Header