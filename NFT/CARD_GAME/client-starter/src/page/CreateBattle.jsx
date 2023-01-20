import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import { useState } from 'react';
import { CustomButton, CustomInput, PageHOC, GameSearch } from '../components';
import styles from '../styles';
import { UseGlobalContext } from '../context';

const CreateBattle = () => {
  const [isWaitingBattle, setisWaitingBattle] = useState(true)

  const {contract, battleName, setbattleName } = UseGlobalContext();
  const navigate = useNavigate();
  //Ajoute la bataille au smart contract 
  const handleClick = async () => {
    if (!(battleName && battleName.trim())) return;

    setisWaitingBattle(true)
    try{
      await contract.createBattle(battleName);
    } catch (e) {
      alert(e);
    }

  };
  return (
    <>

      {isWaitingBattle && <GameSearch/>}
        <div className='flex flex-col mb-5'>
      <CustomInput 
        label="battle"
        placeholder="Enter Battle Name"
        value={battleName}
        handleValueChange={setbattleName}
      />

      <CustomButton 
      handleclick={handleClick}
      text="Create Battle"
      customStyle="mt-6"
      
      />


    </div>
    <p className={styles.infoText} onClick={() => navigate('/join-battle')}>Or join already existing battle </p>
    </>


  )
};

export default PageHOC(CreateBattle, 
  <> Create <br/> a new battle</>,
  <> Create your own battle and wait other players to join you </>
  );