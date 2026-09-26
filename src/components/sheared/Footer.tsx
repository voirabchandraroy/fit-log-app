import Image from 'next/image';
import logo from '@/assets/logo.png';

const Footer = () => {
    return (
        <footer className="w-full border-t border-[#24272d] bg-[#0a0b0d] px-6 py-6 sm:px-10">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 sm:flex-row">

                {/* Logo */}
                <div className="flex items-center gap-1.5">
                    <Image
                        src={logo}
                        alt="FitLog"
                        className="h-4 w-auto"
                    />
                    <span className="text-sm font-extrabold uppercase tracking-wide text-white">
                        FitLog
                    </span>
                </div>

                {/* Copyright */}
                <p className="text-[11px] text-[#858a94]">
                    © 2026 FitLog — Workout Library. Train hard, log honest.
                </p>

            </div>
        </footer>
    );
};

export default Footer;