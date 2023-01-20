import { ethers } from "ethers";
import { ABI } from "../contract";

const AddNewEvent = (eventFilter, provider, callBackFunction) => {
    provider.removeListener(eventFilter); //One and only event

    provider.on(eventFilter, (logs) => {
        const parsedLog = (new ethers.utils.Interface(ABI)).parseLog(logs);

        callBackFunction(logs);
    })
}

export const createEventListener = ({ navigate, contract, provider, walletAddress, setShowAlert}) => {
    const NewPlayerEventFilter = contract.filters.NewPlayer(); //Quand l'evenement NewPlayer est appeler dans le .sol on le recupere ici
    const callBackFunction = ({ args }) => {
        console.log("New player created ", args);

        if(walletAddress === args.owner) {
            setShowAlert({
                status: true,
                type: 'success',
                message:'Player has been successfully registered'
            })
        }
    } 
    AddNewEvent(NewPlayerEventFilter, provider, callBackFunction)

}