import { React, useEffect } from 'react'
import './Header.css'
import useLocalStorage from './hooks/useLocalStorage';


function Header() {

    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useLocalStorage('react-todo.theme', defaultDark); // 'light' | 'dark'

    const backgroundDark = './images/bg-desktop-dark.jpg';
    const backgroundLight = './images/bg-desktop-light.jpg'

    useEffect(() => {
      document.documentElement.setAttribute('color-scheme', theme);}
      , [theme])
    

  return (
    <div 
    className='header'
    style ={{ backgroundImage: `url(${theme === 'dark' ? backgroundDark : backgroundLight})`}}
    >
        
        <div className='header-text'>
            <h1>TODO</h1>
            <button 
            className='btn-theme'
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