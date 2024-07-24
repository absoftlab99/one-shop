'use client'
import { createContext, useState } from 'react';

export const GlobalContext = createContext();
const initialState ={
   
}

export const GlobalContextProvider = ({ children }) => {
    const [GlobalState, setGlobalState] = useState(
        {
            ...initialState
        });

    const resetState=()=>{
        setGlobalState(initialState)
    }
    return (
        <GlobalContext.Provider value={{ GlobalState,setGlobalState }}>
            {children}
        </GlobalContext.Provider>
    );
};