import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom'
import { UseGlobalContext } from '../context';
import { logo, heroImg } from '../assets';
import Alert from './Alert';
//Import all styles, details available on tailwindcss dot com
import styles from '../styles' 


//Page High Order Component, can wrap other component
const PageHOC = (Component, title, description) => 
//return the fonction that create the component
    () => {
        const navi = useNavigate();
        const {showAlert} = UseGlobalContext()
        return (
            <div className={styles.hocContainer}>
                { showAlert?.status && <Alert type={showAlert.type} msg={showAlert.message}/>  }
                <div className={styles.hocContentBox}>
                    <img src={logo} alt="logo" className={styles.hocLogo} onClick={ () => navi('/')}/>
                
                    <div className={styles.hocBodyWrapper}>
                        <div className='flex flex-row w-full'> 
                            <h1 className={`flex ${styles.headText} head-text`}>{title}</h1>
                        </div>
                        <p className={`${styles.normalText} my-10`}> {description} </p>
                        <Component />
                    </div>
                <p className={styles.footerText}> Made with love by laran :3</p>
                </div>
            </div>
        )
};

export default PageHOC

