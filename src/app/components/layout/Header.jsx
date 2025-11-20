import { Headset } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
    return (
        <header className="w-full h-16 bg-[#09090b] px-20 flex justify-between items-center">
            <button className="text-white text-2xl font-bold"
            onClick="/">
                <Link href="/"
                className="hover:text-[#8cc6d4] hover:cursor-pointer">
                    WALL-E
                </Link>
            </button>
        </header>
    );
}