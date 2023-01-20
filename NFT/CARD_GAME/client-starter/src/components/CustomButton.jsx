import React from 'react'
import styles from '../styles'


const CustomButton = ({text, handleclick, customStyle}) => {
  return (
    <button
    type='button' 
    onClick={handleclick} 
    className={`${styles.btn} ${customStyle}`} 
    >
    {text}
    </button>

  )
}

export default CustomButton