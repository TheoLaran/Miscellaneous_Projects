import React from 'react'
import { useNavigate } from 'react-router-dom';
import CustomButton from './CustomButton';
import { UseGlobalContext } from '../context';
import { player01, player02 } from '../assets';
import styles from '../styles';

const GameSearch = () => {
    const { contract, walletAddress } = UseGlobalContext();
    const navigate = useNavigate();
    console.log(contract)

  return (
    <div className={`${styles.flexBetween} ${styles.gameLoadContainer}`}>
            <div className={styles.gameLoadBtnBox}>
                <CustomButton 
                    text="Choose Battleground"
                    handleclick={() => navigate('/battleground')}
                    customStyle="mt-6"
                />
            </div>

            <div className={`flex-1 ${styles.flexCenter} flex-col`}>
                <h1 className={`${styles.headText} text-center`}> Waiting for a <br /> opponent... </h1>


            <p className={styles.gameLoadText}>
                Protip : To win, beat your opponent
            </p>
            


            <div className={styles.gameLoadPlayersBox}>
                <div className={`${styles.flexCenter} flex-col`}>
                    <img src={player01} className={styles.gameLoadPlayerImg}/>

                    <h3 className={styles.gameLoadText}>{contract.getPlayerName(walletAddress)}</h3>                    
                    <p className={styles.gameLoadText}>{walletAddress.slice(0,32)}</p>

                </div>

                <h2 className={styles.gameLoadVS}>VS</h2>
                
                <div className={`${styles.flexCenter} flex-col`}>
                    <img src={player02} className={styles.gameLoadPlayerImg}/>
                    <p className={styles.gameLoadText}>{"0x" + "?".repeat(30)}</p>

                </div>
                
            </div>
            </div>
    </div>
  )
}

export default GameSearch;
