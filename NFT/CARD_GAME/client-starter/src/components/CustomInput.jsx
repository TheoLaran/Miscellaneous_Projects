//rafce comme raccourci pour template la page
import React from 'react'
import styles from '../styles'


const regex = /^[A-Za-z0-9]+$/;
//Attention au parametre sous forme d'objet
const CustomInput = ({label,  placeholder, value, handleValueChange}) => {
  return (
    <>
    <label htmlFor='name' className={styles.label}> {label} </label>
    <input 
        className={styles.input}
        type='text' 
        placeholder={placeholder} 
        value={value}
        onChange={ (e) => {
            const c = e.target.value
            if(c === '' || regex.test(c))
                handleValueChange(c)
            
        }} />
    </>
  )
}

export default CustomInput