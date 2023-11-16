import React, { useEffect, useState } from 'react'

const useLocalStorage = (key, initialvalue) => {
    const [value, setValue] = useState(() => {
        try {
             const item = window.localStorage.getItem(key);
             return item ? JSON.parse(item) : initialvalue;
        }
        catch (error) {
            return initialvalue;
        }
        
    });
    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
    
  return [value, setValue]
}

export default useLocalStorage