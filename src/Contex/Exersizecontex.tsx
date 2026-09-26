'use client'
import { createContext, ReactNode, useState } from 'react';

export const ExersizeContex=createContext({})

const ExersizeProvider = ({children}:{children:ReactNode}) => {
    
    const [add,setadd]=useState([])
    const [sev,setsev]=useState([])

    const sheareddata={
        add,
        setadd,
        sev,
        setsev
    }
    return <ExersizeContex.Provider value={sheareddata}>{children}</ExersizeContex.Provider>

}
export default ExersizeProvider;