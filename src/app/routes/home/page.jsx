'use client';
import React from "react";

export default function HomePage() {
    return (
        <div className="flex flex-col min-h-screen w-full">
            <header className="p-4 bg-gray-800 text-white">
                <h1 className="text-2xl font-bold">Welcome to the Home Page</h1>
            </header>
            <main className="flex flex-grow justify-center items-center bg-[linear-gradient(180deg,rgba(9,9,11,1)_0%,rgba(15,15,20,1)_23%,rgba(15,15,20,1)_24%,rgba(15,23,26,1)_65%,rgba(17,30,33,1)_100%)]">
                <p className="text-white text-lg">This is the main content area.</p>
            </main>
        </div>
    );
}