import React, { createContext, useContext, useEffect, useRef, useState } from "react"; 
import { ethers, Signer } from 'ethers';
import Web3Modal from 'web3modal';
import { useNavigate } from "react-router-dom";
import { ADDRESS, ABI } from '../contract'; 
import { createEventListener } from "./createEventListeners";

const global_context = createContext();

export const GlobalContextProvider = ({ children }) => {
    //Retourne un wrapper qui contient les valeurs sous forme de dictionnaire
    //Children correspond au contenu HTML de la page 

    const [walletAddress, setWalletAddress] = useState('');
    const [provider, setProvider] = useState('');
    const [contract, setContract] = useState('');
    const [showAlert, setShowAlert] = useState({status:false , type:'info', message:''});
    const [battleName, setbattleName] = useState('')
    const navigate = useNavigate();

    //Set l adresse en fonction du contexte
    const updateCurrentWalletAddress = async () => {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        if(accounts) setWalletAddress(accounts[0]); 
    }


    //Set l adresse du client avec le contexte
    useEffect(() => {
        const setSmartContractAndProvider = async () => {
            const web3Modal = new Web3Modal();
            const connection = await web3Modal.connect();
            const newProvider = new ethers.providers.Web3Provider(connection);
            const signer = newProvider.getSigner();
            const newContract = new ethers.Contract(ADDRESS, ABI, signer);
            setProvider(newProvider);
            setContract(newContract);
        };
        setSmartContractAndProvider();
      }, []);

          //Connection du wallet 
    useEffect(() => { 
        updateCurrentWalletAddress();
        window.ethereum.on('accountsChanged', updateCurrentWalletAddress);
    }, []);

    useEffect(() => {
        if (contract) {
            createEventListener({
                navigate, contract, provider, walletAddress, setShowAlert
            })
        }
    }, [contract])

    useEffect(() => {
        if(showAlert?.status) {
            const timer =  setTimeout(() => { 
                setShowAlert({ status:false, type:'info', message:''} );
            }, [5000]) 
            return () => clearTimeout(timer);
        } 
    }, [showAlert])


    return (
        <global_context.Provider value={{
            contract, walletAddress, showAlert, setShowAlert, battleName, setbattleName
        }}>
        {children}
        </global_context.Provider>

    )
}

export const UseGlobalContext = () => useContext(global_context);