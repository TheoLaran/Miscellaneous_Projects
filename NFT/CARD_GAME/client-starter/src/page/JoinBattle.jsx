import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { UseGlobalContext } from '../context'
import { CustomButton, PageHOC } from '../components'

import styles from '../styles'


const JoinBattle = () => {
  const navigate = useNavigate();
  return (
    <>
        <h2 className={styles.joinHeadText}> Available Battles :</h2>
        <p className={styles.infoText} onClick={() => navigate('/create-battle')}>Or create a new one</p>

    </>
  )
}

export default PageHOC(
    JoinBattle,
    <>Join <br/> a battle</>,
    <>Join already existing battle</>,
    
)