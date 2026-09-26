import Image from 'next/image';
import React from 'react';
import Exersicecard from '../sheared/Exersicecard';
import { IExercise } from '@/types/type';


const getlibrary = async () => {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog')
    const data = await res.json()
    return data
}

const Thelibrari = async () => {
    const exersizes = await getlibrary()
    return (
        <section id="library" className="bg-[#0b0c0e] px-4 py-10 sm:px-6 lg:px-8">
            <div className="container mx-auto">

                {/* Small Line */}
                <div className="mb-6 flex justify-center">
                    <div className="h-[3px] w-4 bg-[#c8ff00]" />
                </div>

                {/* Heading */}
                <div>
                    <h2 className="text-3xl font-black uppercase text-white">
                        THE LIBRARY
                    </h2>

                    <p className="mt-1 text-sm text-[#9297a3]">
                        Twelve lifts covering every major muscle group.
                    </p>
                </div>
            </div>
            <section className='container mx-auto'>
                <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" >
                    {
                        exersizes.map((exersize: IExercise, ind: number) => {
                            return <Exersicecard key={ind} exersize={exersize} />;
                        })
                    }
                </div>
            </section>
        </section>
    );
};

export default Thelibrari;