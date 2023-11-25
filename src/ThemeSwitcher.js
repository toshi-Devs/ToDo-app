import { React, useState, useEffect} from 'react'
import styles from './ThemeSwitcher.module.css'
import CloseIcon from '@mui/icons-material/Close';
import ColorLensIcon from '@mui/icons-material/ColorLens';

const ThemeSwitcher = () => {

  const [isColorPicking, setIsColorPicking] = useState(false);
  const [hue, setHue] = useState(200);

  useEffect(() => { 
    document.documentElement.style.setProperty('--hue', hue);
  }, [hue])

  return (
    <div className={styles.wrapper}
    style={{
      backgroundColor: isColorPicking
        ? 'hsl(var(--muted) / .6)'
        : 'transparent'
    }}>
      {
        isColorPicking 
        ? (
          <>
          <button 
          className={`btn ${styles.close}`}
          aria-label='Disable color picker'
          onClick={() => setIsColorPicking(false)}
          > <CloseIcon />
          </button>
          <input 
          className={styles.picker}
          type='range'
          min="0"
          max="360"
          aria-label='change color theme slider'
          value={hue}
          onInput={(e) => setHue(e.target.value)}

          />
          </>
        )
        : (
          <div className={styles.btns}>
            <button 
            className='btn'
            aria-label='Enable color picker'
            onClick={() => setIsColorPicking(true)}
            > <ColorLensIcon/>
            </button>
          </div>
        )
      }
    </div>
  )
}

export default ThemeSwitcher