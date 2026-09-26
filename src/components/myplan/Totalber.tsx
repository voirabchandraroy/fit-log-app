'use client'
import { ExersizeContex } from "@/Contex/Exersizecontex";
import { IExercise } from "@/types/type";
import { useContext } from "react";

interface TotalberProps {
    activeTab: 'plan' | 'saved';
}

const Totalber = ({ activeTab }: TotalberProps) => {
    const { add, sev } = useContext(ExersizeContex);

    const list = activeTab === 'plan' ? add : sev;

    const totalExercises = list.length;
    const totalMinutes = list.reduce((sum: number, item: IExercise) => sum + item.duration, 0);
    const totalCalories = list.reduce((sum: number, item: IExercise) => sum + item.caloriesBurned, 0);

    return (
        <div className="mt-6 grid grid-cols-3 gap-6 rounded-xl border border-[#292d34] bg-[#15171c] px-8 py-8">

            <div>
                <p className="text-xs text-[#858a94]">Exercises</p>
                <p className="mt-1 text-2xl font-black text-[#c8ff00]">
                    {totalExercises}
                </p>
            </div>

            <div className="border-l border-[#292d34] pl-6">
                <p className="text-xs text-[#858a94]">Minutes</p>
                <p className="mt-1 text-2xl font-black text-white">
                    {totalMinutes}
                </p>
            </div>

            <div className="border-l border-[#292d34] pl-6">
                <p className="text-xs text-[#858a94]">Calories</p>
                <p className="mt-1 text-2xl font-black text-white">
                    {totalCalories}
                </p>
            </div>

        </div>
    );
};

export default Totalber;