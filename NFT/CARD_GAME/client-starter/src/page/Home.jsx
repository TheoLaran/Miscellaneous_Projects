import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageHOC, CustomInput, CustomButton } from '../components';
import { UseGlobalContext } from '../context';

const Home = () => {
  const { contract, walletAddress, setShowAlert } = UseGlobalContext();
  const [player, setPlayer] = useState('');
  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      const isPlayerExist = await contract.isPlayer(walletAddress);
      if(!isPlayerExist) {
        await contract.registerPlayer(player, player);
        setShowAlert({ 
          status:true, 
          type:'info',
          message:`${player} as been connected`
        }) 
      }
    }
    catch (error) {
      setShowAlert({ 
        status:true, 
        type:'failure',
        message:`Something went wrong \n ${error}`
      }) 
    }
  }

  useEffect(() => {
    const checkForPlayerToken = async () => {
        const isPlayerExist = await contract.isPlayer(walletAddress);
        const isPlayerTokenExists = await contract.isPlayerToken(walletAddress);
        if (isPlayerExist && isPlayerTokenExists) navigate('/create-battle');
    }
    if (contract) checkForPlayerToken();
  });

  return (
    <div className='flex flex-col'>
      <CustomInput 
        label="Name"
        placeholder="Enter your player name"
        value={player}
        handleValueChange={setPlayer}
      />

    <CustomButton 
        text="Register"
        handleclick={handleClick}
        customStyle="mt-6"
      />
    </div>
  )
};

export default PageHOC(Home, 
  <> Welcome to my game peeposhy</>,
  <> Connectez vous pour jouer </>
  );