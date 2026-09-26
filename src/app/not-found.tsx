import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/logo.png';

export default function NotFound() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-[#0a0b0d] px-6 text-center">

            {/* Logo */}
            <div className="mb-8 flex items-center gap-3">
                <Image
                    src={logo}
                    alt="FitLog Logo"
                    width={32}
                    height={32}
                    className="h-8 w-8 object-contain"
                />
                <span className="text-xl font-black tracking-wide text-white">
                    FITLOG
                </span>
            </div>

            {/* 404 */}
            <h1 className="text-7xl font-black text-[#c8ff00]">
                404
            </h1>
            <h2 className="mt-4 text-2xl font-black uppercase text-white">
                Page Not Found
            </h2>
            <p className="mt-2 max-w-md text-sm text-[#858a94]">
                The page you&apos;re looking for doesn&apos;t exist or has been moved.
            </p>

            <Link
                href="/"
                className="mt-8 rounded-full bg-[#c8ff00] px-6 py-2.5 text-sm font-bold text-black transition hover:opacity-90"
            >
                Go to Homepage
            </Link>
        </div>
    );
}