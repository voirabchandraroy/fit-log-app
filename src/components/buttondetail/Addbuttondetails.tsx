'use client'
import { ExersizeContex } from '@/Contex/Exersizecontex';
import { IExercise } from '@/types/type';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const Addbuttondetails = ({ exersize }: { exersize: IExercise }) => {

    const { add, setadd } = useContext(ExersizeContex);

    const isAlreadyAdded = add.some((item: IExercise) => item.id === exersize.id);
    const isFull = add.length >= 5;

    const handelAdd = () => {
        if (isAlreadyAdded) {
            toast.error(`${exersize.name} is already in today's plan`);
            return;
        }

        if (isFull) {
            toast.error(`You can only add 5 lifts to today's plan`);
            return;
        }

        setadd((prev: IExercise[]) => [...prev, exersize]);
        toast.success(`${exersize.name} Is Added Today's Plan`);
    }

    return (
        <div>
            <button
                onClick={handelAdd}
                disabled={isAlreadyAdded || isFull}
                className={`rounded-lg px-4 py-2.5 text-xs font-bold uppercase transition ${isAlreadyAdded || isFull
                        ? 'cursor-not-allowed bg-[#292d34] text-[#858a94]'
                        : 'bg-[#c8ff00] text-black hover:opacity-90'
                    }`}
            >
                {isFull && !isAlreadyAdded ? "Plan is Full" : isAlreadyAdded ? "Already Added" : "Add to today's plan"}
            </button>
        </div>
    );
};

export default Addbuttondetails;