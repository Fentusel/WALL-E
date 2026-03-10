import { useState } from "react";
import { Settings } from 'lucide-react';
import { House } from 'lucide-react';
import { ChevronRight } from 'lucide-react';
import { ChevronLeft } from 'lucide-react';
import { Heart } from 'lucide-react';
import { Gem } from 'lucide-react';

export default function Sidebar() {
    const [open, setOpen] = useState(true);

    return (
        <div
            className={`absolute top-0 left-0 h-full bg-[#09090B]  text-white transition-all duration-300 z-10 ${
                open ? "w-64" : "w-20"
            }`}
        >
            <button
                onClick={() => setOpen(!open)}
                className="flex justify-center w-full mt-10 mb-10 p-2 bg-[#09090B] rounded hover:bg-[#19191f]"
            >
                {open ? <ChevronLeft/> : <ChevronRight/>}
            </button>

            {/*space-y-4 adds vertical spacing between list items except first one*/}
            <ul className="flex flex-col min-h-screen w-full items-center space-y-4">
                <li className="flex justify-center w-full gap-3 p-4 hover:bg-[#19191f] rounded cursor-pointer">
                    <span><House/></span>
                    {open && <span>Home</span>}
                </li>
                <li className="flex justify-center w-full gap-3 p-4 hover:bg-[#19191f] rounded cursor-pointer">
                    <span><Heart/></span>
                    {open && <span>Liked</span>}
                </li>
                <li className="flex justify-center w-full gap-3 p-4 hover:bg-[#19191f] rounded cursor-pointer">
                    <span><Gem/></span>
                    {open && <span>Subscription</span>}
                </li>
                <li className="flex justify-center w-full gap-3 p-4 hover:bg-[#19191f] rounded cursor-pointer">
                    <span><Settings /></span>
                    {open && <span>Settings</span>}
                </li>
            </ul>
        </div>
    );
}