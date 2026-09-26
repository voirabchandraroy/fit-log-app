'use client'
import { ExersizeContex } from '@/Contex/Exersizecontex';
import { IExercise } from '@/types/type';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const Sacebuttondetail = ({ exersize }: { exersize: IExercise }) => {

    const { sev, setsev } = useContext(ExersizeContex);

    const handelSev = () => {
        const alreadySaved = sev.some((item: IExercise) => item.id === exersize.id);

        if (alreadySaved) {
            toast.error(`${exersize.name} is already saved`);
            return;
        }

        setsev((prev: IExercise[]) => [...prev, exersize]);
        toast.success(`${exersize.name} Is Saved For Later`);
    }
    return (
        <div>
            <button onClick={() => handelSev()}
                className="rounded-lg border border-[#292d34] px-4 py-2.5 text-xs font-bold uppercase text-white transition hover:border-[#c8ff00]/50">
                Save for later
            </button>
        </div>
    );
};

export default Sacebuttondetail;