'use client'
import { ExersizeContex } from '@/Contex/Exersizecontex';
import { IExercise } from '@/types/type';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext} from 'react';
import { toast } from 'react-toastify';
interface exersizeinterface {
    exersize: IExercise
}

const Myplancard = ({ exersize }: exersizeinterface) => {
    const { setadd } = useContext(ExersizeContex);

    const handleRemove = () => {
        setadd((prev: IExercise[]) => prev.filter((item) => item.id !== exersize.id));
        toast.success(`Remove From Today's Plan`)
    };

    const handleMarkDone = () => {
        setadd((prev: IExercise[]) =>
            prev.map((item) =>
                item.id === exersize.id ? { ...item, done: true } : item
            )
        );
        toast.success(`${exersize.name} marked as done!`);
    }

    return (
        <div className="flex items-center justify-between gap-4 rounded-xl border border-[#292d34] bg-[#15171c] px-4 py-3">

            {/* Left: Image + Info */}
            <div className="flex items-center gap-4">

                {/* Image */}
                <div className="relative h-[70px] w-[70px] flex-shrink-0 overflow-hidden rounded-lg">
                    <Image
                        src={exersize.image}
                        alt={exersize.name}
                        width={70}
                        height={70}
                        className="h-[70px] w-[70px] rounded-lg object-cover"
                    />
                </div>

                {/* Text Info */}
                <div>
                    <h3 className="text-sm font-extrabold uppercase text-white">
                        {exersize.name}
                    </h3>
                    <p className="mt-0.5 text-xs text-[#858a94]">
                        {exersize.equipment}
                    </p>

                    <div className="mt-1.5 flex items-center gap-3 text-xs text-[#858a94]">
                        <span className="flex items-center gap-1">
                            <span className="text-[#c8ff00]">⏱</span>
                            {exersize.duration} min
                        </span>
                        <span className="flex items-center gap-1">
                            <span className="text-orange-400">🔥</span>
                            {exersize.caloriesBurned} kcal
                        </span>
                        <span className="flex items-center gap-1">
                            <span className="text-[#c8ff00]">★</span>
                            {exersize.rating}
                        </span>
                    </div>
                </div>
            </div>

            {/* Right: Actions */}
            <div className="flex flex-shrink-0 items-center gap-3">
                <Link
                    href={`/Exersizes/${exersize.id}`}
                    className="rounded-lg border border-[#292d34] px-4 py-2 text-xs font-bold uppercase text-white transition hover:border-[#c8ff00]/50"
                >
                    View Details
                </Link>

                <button
                    onClick={handleMarkDone}
                    disabled={exersize.done}
                    className={`flex items-center gap-1 rounded-lg px-4 py-2 text-xs font-bold uppercase transition ${exersize.done
                            ? 'cursor-not-allowed bg-[#292d34] text-[#858a94]'
                            : 'bg-[#c8ff00] text-black hover:opacity-90'
                        }`}
                >
                    ✓ Mark as Done
                </button>

                <button
                    onClick={handleRemove}
                    className="px-2 text-[#858a94] transition hover:text-white"
                    aria-label="Remove"
                >
                    ✕
                </button>
            </div>

        </div>

    );
};

export default Myplancard;