'use client';
import React from "react";
import Header from "@/components/layout/Header";
import ChoosingCard from "@/components/ui/choosing-card";

const images = [
    { src: "/icons/hr.png", desc: "This gives you access to sign in as HR", onClick: () => alert("I'm working on it") },
    { src: "/icons/1.png", desc: "This gives you access to sign in as Job Seeker", href: "/routes/login" },
];

export default function Page() {
    return (
        <div className="flex flex-col min-h-screen w-full">
            <Header />
            <div className="flex flex-grow justify-center items-center bg-[linear-gradient(180deg,rgba(9,9,11,1)_0%,rgba(15,15,20,1)_23%,rgba(15,15,20,1)_24%,rgba(15,23,26,1)_65%,rgba(17,30,33,1)_100%)]">
                <div className="flex">
                    {images.map((img) => (
                        <ChoosingCard key={img.src} src={img.src}
                                      href={img.href} onClick={img.onClick} />
                    ))}
                </div>
            </div>
        </div>
    );
}
