import Addbuttondetails from '@/components/buttondetail/Addbuttondetails';
import Sacebuttondetail from '@/components/buttondetail/Savebuttondetail';
import { IExercise } from '@/types/type';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react';


interface PageProps {
    params: Promise<{ id: string }>;
}

const getlibrary = async () => {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog')
    const data = await res.json()
    return data
}

const InfoRow = ({ label, value }: { label: string; value: string | number }) => (
    <div className="flex items-center justify-between px-4 py-2.5 text-xs">
        <span className="uppercase tracking-wide text-[#858a94]">{label}</span>
        <span className="font-semibold text-white">{value}</span>
    </div>
);


const Dtailpage = async ({ params }: PageProps) => {
    const exersies = await getlibrary()
    const { id } = await params;
    const exersize = exersies.find((exersize: IExercise) => String(exersize.id) === id) as IExercise;
    if (!exersize) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-[#0a0b0d] px-6 py-11 sm:px-10">
            <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-2">

                {/* Image */}
                <div className="relative h-[550px] w-full overflow-hidden rounded-2xl md:h-full">
                    <Image
                        src={exersize.image}
                        alt={exersize.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                    />
                </div>

                {/* Content */}
                <div>
                    <h1 className="text-2xl font-extrabold uppercase text-white">
                        {exersize.name}
                    </h1>

                    {exersize.description && (
                        <p className="mt-2 text-sm text-[#858a94]">
                            {exersize.description}
                        </p>
                    )}

                    {/* Muscle Tags */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                        {exersize.muscleGroups.map((muscle) => (
                            <span
                                key={muscle}
                                className="rounded-full bg-[#c8ff00] px-2.5 py-1 text-[10px] font-bold uppercase leading-none text-black"
                            >
                                {muscle}
                            </span>
                        ))}
                    </div>

                    {/* Info Table */}
                    <div className="mt-6 divide-y divide-[#24272d] rounded-xl border border-[#292d34] bg-[#15171c]">
                        <InfoRow label="Equipment" value={exersize.equipment} />
                        {exersize.difficulty && (
                            <InfoRow label="Difficulty" value={exersize.difficulty} />
                        )}
                        {exersize.sets && (
                            <InfoRow label="Sets" value={exersize.sets} />
                        )}
                        {exersize.reps && (
                            <InfoRow label="Reps" value={exersize.reps} />
                        )}
                        <InfoRow label="Duration" value={`${exersize.duration} min`} />
                        <InfoRow label="Calories" value={`${exersize.caloriesBurned} kcal`} />
                        <InfoRow label="Rating" value={exersize.rating} />
                    </div>

                    {/* Instructions */}
                    {exersize.instructions && exersize.instructions.length > 0 && (
                        <div className="mt-6">
                            <h2 className="text-sm font-extrabold uppercase text-white">
                                Instructions
                            </h2>
                            <ol className="mt-2 list-decimal space-y-1.5 pl-4 text-sm text-[#858a94]">
                                {exersize.instructions.map((step, i) => (
                                    <li key={i}>{step}</li>
                                ))}
                            </ol>
                        </div>
                    )}

                    {/* Actions */}
                    <div className="mt-6 flex flex-wrap gap-3">
                        <Addbuttondetails exersize={exersize}/>
                        <Sacebuttondetail exersize={exersize} />
                        
                    </div>
                </div>

            </div>
        </div>
    );
};


export default Dtailpage;