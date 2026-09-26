'use client'
import Image from 'next/image';
import logo from '@/assets/logo.png';
import React, { useContext, useState } from 'react';
import Link from 'next/link';
import { ExersizeContex } from '@/Contex/Exersizecontex';

const Navebar = () => {
    const { add, sev } = useContext(ExersizeContex);
    const [menuOpen, setMenuOpen] = useState(false);

    return (

        <nav className="border-b border-[#1d2025] bg-[#0b0c0e]">
            <div className="navbar container mx-auto min-h-[68px] px-4 sm:px-6 lg:px-8">

                {/* Logo */}
                <div className="navbar-start">
                    <Link href='/' className="flex items-center gap-3">
                        <Image
                            src={logo}
                            alt="FitLog Logo"
                            width={28}
                            height={28}
                            className="h-7 w-7 object-contain"
                        />

                        <span className="text-lg font-black tracking-wide text-white">
                            FITLOG
                        </span>
                    </Link>
                </div>


                {/* Center Navigation — desktop */}
                <div className="navbar-center hidden md:flex">
                    <ul className="flex items-center gap-2">

                        <li className="rounded-full bg-[#17200b] px-5 py-2 text-sm font-semibold text-[#c8ff00]">
                            <Link href='/'> Workouts</Link>
                        </li>

                        <li className="rounded-full px-5 py-2 text-sm font-medium text-[#8f949e] transition hover:text-white">
                            <Link href='/listedexersixe'> My Plan</Link>
                        </li>

                    </ul>
                </div>

                {/* Right Side */}
                <div className="navbar-end">
                    <div className="flex items-center gap-3 sm:gap-5 text-sm">

                        {/* Plan — desktop only */}
                        <div className="hidden items-center gap-2 sm:flex">
                            <Link
                                href='/listedexersixe'
                                className="text-[#a0a4ad]">
                                Plan
                            </Link>

                            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#c8ff00] px-1.5 text-[11px] font-bold text-black">
                                {add.length}
                            </span>
                        </div>

                        {/* Saved — desktop only */}
                        <div className="hidden items-center gap-2 sm:flex">
                            <Link href='/listedexersixe'
                                className="text-[#a0a4ad]">
                                Saved
                            </Link>

                            <span className="flex h-5 min-w-5 items-center justify-center rounded-full border border-[#30343b] px-1.5 text-[11px] text-[#9da2ac]">
                                {sev.length}
                            </span>
                        </div>

                        {/* Hamburger — mobile only */}
                        <button
                            onClick={() => setMenuOpen((prev) => !prev)}
                            className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#292d34] text-white md:hidden"
                            aria-label="Toggle menu"
                        >
                            {menuOpen ? '✕' : '☰'}
                        </button>

                    </div>
                </div>

            </div>

            {/* Mobile Dropdown Menu */}
            {menuOpen && (
                <div className="border-t border-[#1d2025] bg-[#0b0c0e] px-4 py-4 md:hidden">
                    <ul className="flex flex-col gap-2">

                        <li>
                            <Link
                                href='/'
                                onClick={() => setMenuOpen(false)}
                                className="block rounded-lg bg-[#17200b] px-4 py-2.5 text-sm font-semibold text-[#c8ff00]"
                            >
                                Workouts
                            </Link>
                        </li>

                        <li>
                            <Link
                                href='/listedexersixe'
                                onClick={() => setMenuOpen(false)}
                                className="block rounded-lg px-4 py-2.5 text-sm font-medium text-[#8f949e] transition hover:text-white"
                            >
                                My Plan
                            </Link>
                        </li>

                        <li className="mt-2 flex items-center justify-between rounded-lg border border-[#292d34] px-4 py-2.5">
                            <Link
                                href='/listedexersixe'
                                onClick={() => setMenuOpen(false)}
                                className="text-sm text-[#a0a4ad]"
                            >
                                Plan
                            </Link>
                            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#c8ff00] px-1.5 text-[11px] font-bold text-black">
                                {add.length}
                            </span>
                        </li>

                        <li className="flex items-center justify-between rounded-lg border border-[#292d34] px-4 py-2.5">
                            <Link
                                href='/listedexersixe'
                                onClick={() => setMenuOpen(false)}
                                className="text-sm text-[#a0a4ad]"
                            >
                                Saved
                            </Link>
                            <span className="flex h-5 min-w-5 items-center justify-center rounded-full border border-[#30343b] px-1.5 text-[11px] text-[#9da2ac]">
                                {sev.length}
                            </span>
                        </li>

                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navebar;