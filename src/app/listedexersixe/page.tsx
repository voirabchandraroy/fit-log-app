'use client'
import Myplancard from "@/components/myplan/Myplancard";
import Savedcard from "@/components/myplan/Savedcard";
import Totalber from "@/components/myplan/Totalber";
import { ExersizeContex } from "@/Contex/Exersizecontex";
import { IExercise } from "@/types/type";
import Link from "next/link";
import { useContext, useState, useRef, useEffect } from "react";

const sortOptions = [
    { label: 'Duration', value: 'duration' },
    { label: 'Calories', value: 'calories' },
    { label: 'Rating', value: 'rating' },
] as const;

type SortValue = typeof sortOptions[number]['value'];

const Listedexersize = () => {
    const { add, sev } = useContext(ExersizeContex);

    const [sortBy, setSortBy] = useState<SortValue>('duration');

    const [activeTab, setActiveTab] = useState<'plan' | 'saved'>('plan');

    const [open, setOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const [pageLoading, setPageLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setPageLoading(false), 600);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setOpen(false);
            }
        };


        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);



    const sortExercises = (list: IExercise[]) => {
        const sorted = [...list];
        switch (sortBy) {
            case 'duration':
                return sorted.sort((a, b) => a.duration - b.duration);
            case 'calories':
                return sorted.sort((a, b) => a.caloriesBurned - b.caloriesBurned);
            case 'rating':
                return sorted.sort((a, b) => b.rating - a.rating);
            default:
                return sorted;
        }
    };

    const sortedAdd = sortExercises(add);
    const sortedSev = sortExercises(sev);
    const currentLabel = sortOptions.find((opt) => opt.value === sortBy)?.label;

    if (pageLoading) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-[#0a0b0d]">
                <p className="text-lg font-semibold text-[#858a94]">Loading workouts…</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#0a0b0d] px-4 py-8">
            <div className="container mx-auto">

                {/* Heading */}
                <h1 className="text-3xl font-black uppercase text-white">
                    My Plan
                </h1>
                <p className="mt-1 text-sm text-[#858a94]">
                    Cap of five lifts for today. Finish them, then load more.
                </p>
                <div className="mb-6">
                    <Totalber activeTab={activeTab} />
                </div>

                {/* Tabs + Sort By row */}
                <div className="mb-4 flex items-center justify-between">

                    {/* Custom Pill Tabs */}
                    <div className="inline-flex items-center gap-1 rounded-full border border-[#292d34] bg-[#0e0f12] p-1">
                        <button
                            onClick={() => setActiveTab('plan')}
                            className={`rounded-full px-4 py-1.5 text-sm font-semibold transition ${activeTab === 'plan'
                                ? 'bg-[#24272d] text-white'
                                : 'text-[#858a94] hover:text-white'
                                }`}
                        >
                            Today&apos;s Plan
                        </button>
                        <button
                            onClick={() => setActiveTab('saved')}
                            className={`rounded-full px-4 py-1.5 text-sm font-bold transition ${activeTab === 'saved'
                                ? 'bg-[#24272d] text-white'
                                : 'text-[#858a94] hover:text-white'
                                }`}
                        >
                            Saved
                        </button>
                    </div>

                    {/* Custom Sort By dropdown */}
                    <div className="relative flex items-center gap-2" ref={dropdownRef}>
                        <span className="text-sm text-[#858a94]">Sort By</span>

                        <button
                            onClick={() => setOpen((prev) => !prev)}
                            className="flex items-center gap-2 rounded-lg border border-[#292d34] bg-[#15171c] px-3 py-1.5 text-sm font-bold text-white"
                        >
                            {currentLabel}
                            <span className={`text-xs transition-transform ${open ? 'rotate-180' : ''}`}>
                                ▾
                            </span>
                        </button>

                        {open && (
                            <div className="absolute right-0 top-full z-10 mt-1 w-36 overflow-hidden rounded-lg border border-[#292d34] bg-[#15171c] shadow-lg">
                                {sortOptions.map((opt) => (
                                    <button
                                        key={opt.value}
                                        onClick={() => {
                                            setSortBy(opt.value);
                                            setOpen(false);
                                        }}
                                        className={`block w-full px-3 py-2 text-left text-sm transition ${sortBy === opt.value
                                            ? 'bg-[#c8ff00] font-bold text-black'
                                            : 'text-white hover:bg-[#24272d]'
                                            }`}
                                    >
                                        {opt.label}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
                <div className="rounded-xl border border-[#292d34] bg-[#15171c] p-6">
                    {activeTab === 'plan' ? (
                        <div className="flex flex-col gap-4">
                            {sortedAdd.length > 0 ? (
                                sortedAdd.map((exersize: IExercise) => (
                                    <Myplancard key={exersize.id} exersize={exersize} />
                                ))
                            ) : (
                                <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-[#292d34] px-6 py-16 text-center">
                                    <h3 className="text-lg font-black uppercase text-white">
                                        Nothing Here Yet
                                    </h3>
                                    <p className="mt-1 text-sm text-[#858a94]">
                                        Browse the library and add a lift to get today moving.
                                    </p>

                                    <Link
                                        href="/"
                                        className="mt-5 rounded-full bg-[#c8ff00] px-5 py-2 text-sm font-bold text-black transition hover:opacity-90"
                                    >
                                        Go to workouts
                                    </Link>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="flex flex-col gap-4">
                            {sortedSev.length > 0 ? (
                                sortedSev.map((exersize: IExercise) => (
                                    <Savedcard key={exersize.id} exersize={exersize} />
                                ))
                            ) : (
                                <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-[#292d34] px-6 py-16 text-center">
                                    <h3 className="text-lg font-black uppercase text-white">
                                        Nothing Here Yet
                                    </h3>
                                    <p className="mt-1 text-sm text-[#858a94]">
                                        Browse the library and add a lift to get today moving.
                                    </p>

                                    <Link
                                        href="/"
                                        className="mt-5 rounded-full bg-[#c8ff00] px-5 py-2 text-sm font-bold text-black transition hover:opacity-90"
                                    >
                                        Go to workouts
                                    </Link>
                                </div>
                            )}
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};

export default Listedexersize