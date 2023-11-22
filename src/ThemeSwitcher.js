import { React, useState} from 'react'
import styles from './ThemeSwitcher.module.css'
import CloseIcon from '@mui/icons-material/Close';
import ColorLensIcon from '@mui/icons-material/ColorLens';

const ThemeSwitcher = () => {

  const [isColorPicking, setIsColorPicking] = useState(false);

  return (
    <div className={styles.wrapper}>
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