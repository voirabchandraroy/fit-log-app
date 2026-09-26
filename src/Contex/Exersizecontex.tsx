'use client'
import { IExercise } from '@/types/type';
import { createContext, ReactNode, useState } from 'react';

interface IExersisecontex{
        add:IExercise[],
        setadd:React.Dispatch<React.SetStateAction<IExercise[]>>,
        sev:IExercise[],
        setsev:React.Dispatch<React.SetStateAction<IExercise[]>>
}

export const ExersizeContex=createContext<IExersisecontex>({
        add:[],
        setadd:()=>{},
        sev:[],
        setsev:()=>{}    
})

const ExersizeProvider = ({children}:{children:ReactNode}) => {   
    const [add,setadd]=useState<IExercise[]>([])
    const [sev,setsev]=useState<IExercise[]>([])

    const sheareddata={
        add,
        setadd,
        sev,
        setsev
    }
    return <ExersizeContex.Provider value={sheareddata}>{children}</ExersizeContex.Provider>

}
export default ExersizeProvider;