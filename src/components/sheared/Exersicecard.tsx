import { IExercise } from '@/types/type';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
interface Iexersizeprops {
    exersize: IExercise
}

const Exersicecard = ({ exersize }: Iexersizeprops) => {
    return (
        <section className='container mx-auto'>
            <Link href={`/Exersizes/${exersize.id}`} className="group block">
                <div className="overflow-hidden rounded-xl border border-[#292d34] bg-[#15171c] transition duration-300 hover:-translate-y-1 hover:border-[#c8ff00]/50 hover:shadow-lg hover:shadow-[#c8ff00]/10">

                    {/* Image */}
                    <div className="h-[240px] w-full overflow-hidden">
                        <Image
                            src={exersize.image}
                            alt={exersize.name}
                            width={900}
                            height={800}
                            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        />
                    </div>

                    {/* Content */}
                    <div className="px-3.5 py-4">

                        {/* Muscle Tags */}
                        <div className="mb-2.5 flex flex-wrap gap-1.5">
                            {exersize.muscleGroups.map((muscle) => (
                                <span
                                    key={muscle}
                                    className="rounded-full bg-[#c8ff00] px-2 py-[3px] text-[8px] font-bold uppercase leading-none text-black"
                                >
                                    {muscle}
                                </span>
                            ))}
                        </div>

                        {/* Exercise Name */}
                        <h3 className="text-[12px] font-extrabold uppercase leading-tight text-white">
                            {exersize.name}
                        </h3>

                        {/* Equipment */}
                        <p className="mt-1 text-[9px] text-[#858a94]">
                            {exersize.equipment}
                        </p>

                        {/* Divider */}
                        <div className="my-3 border-t border-[#24272d]" />

                        {/* Stats */}
                        <div className="flex items-center gap-4 text-[8px] text-[#858a94]">

                            <span className="flex items-center gap-1">
                                <span className="text-[9px]">◷</span>
                                {exersize.duration} min
                            </span>

                            <span className="flex items-center gap-1">
                                <span className="text-[9px]">●</span>
                                {exersize.caloriesBurned} kcal
                            </span>

                            <span className="flex items-center gap-1">
                                <span className="text-[9px]">☆</span>
                                {exersize.rating}
                            </span>

                        </div>

                    </div>
                </div>
            </Link>
        </section>
    );
};

export default Exersicecard;