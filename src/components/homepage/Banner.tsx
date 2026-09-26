'use client'
import Image from 'next/image';
import banner from '@/assets/banner.png'
import React from 'react';

const Banner = () => {

  const handleScrollToLibrary = () => {
    document.getElementById('library')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <section className="bg-[#0b0c0e] px-4 py-8 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="flex min-h-[520px] items-center overflow-hidden rounded-2xl border border-[#272b33] bg-[#15171c]">

            {/* Left Side */}
            <div className="w-full px-8 py-14 sm:px-12 md:w-1/2 md:px-16 lg:px-20 xl:px-24">
              <p className="mb-5 text-sm font-bold tracking-[0.15em] text-[#c8ff00]">
                WORKOUT LIBRARY
              </p>

              <h1 className="max-w-[650px] text-5xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-[64px]">
                TRAIN WITH INTENT. LOG EVERY SET.
              </h1>

              <p className="mt-6 max-w-[550px] text-base leading-7 text-[#9297a3] lg:text-lg">
                FitLog is a dark, no-nonsense gym companion: pick a lift,
                lock it into today&apos;s plan, and watch the week&apos;s work
                add up.
              </p>

              <button
                onClick={handleScrollToLibrary}
                className="mt-8 inline-flex items-center gap-2 rounded-md bg-[#c8ff00] px-7 py-3.5 text-sm font-bold uppercase text-black transition hover:bg-[#b5eb00]"
              >
                <span>⬇</span>
                Browse Workouts
              </button>
            </div>

            {/* Right Side */}
            <div className="relative hidden h-[520px] w-1/2 md:block">
              <Image
                src={banner}
                alt="Workout"
                fill
                priority
                className="object-contain px-8 py-8 lg:px-12"
              />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;