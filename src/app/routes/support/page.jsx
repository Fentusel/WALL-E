'use client';
import React, from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

// I did some rework for this file cus firebase is not entirely free :)

export default function Support() {

    const showAlert = () => {
        alert("i will work on this after i learn backend basics")
    }

    return (
        <div className="min-h-screen flex flex-col bg-[linear-gradient(180deg,rgba(9,9,11,1)_0%,rgba(15,15,20,1)_23%,rgba(15,15,20,1)_24%,rgba(15,23,26,1)_65%,rgba(17,30,33,1)_100%)] text-white">
            <header className="w-full h-16 bg-[#09090b] px-20 flex justify-between items-center">
                <Link href="/" className="text-white text-2xl font-bold hover:text-[#76c2bc] hover:cursor-pointer">
                    <span className="flex items-center gap-2">
                        <ArrowLeft className="size-7"/>
                        WALL-E
                    </span>
                </Link>
            </header>
            <div className="flex justify-center items-center flex-grow"
                 onSubmit = {(e) => {e.preventDefault(); showAlert()}}
            >
                <div className="w-[500px] bg-[#19191f] p-8 rounded-xl shadow-lg shadow-black/40">
                    <h1 className="text-2xl font-bold mb-6 text-white">
                        Contact Support
                    </h1>
                    <form className="flex flex-col gap-4">
                        <input
                            type="text"
                            placeholder="Your name"
                            onChange={(e) =>(e.target.value)}
                            className="bg-[#09090B] p-3 rounded outline-none"
                            required
                        />
                        <input
                            type="email"
                            placeholder="Your email"
                            onChange={(e) =>(e.target.value)}
                            className="bg-[#09090B] p-3 rounded outline-none"
                            required
                        />
                        <textarea
                            placeholder="Your message"
                            onChange={(e) =>(e.target.value)}
                            className="bg-[#09090B] p-3 rounded h-[150px] outline-none"
                            required
                        />
                        <button
                            type="submit"
                            className="bg-gradient-to-r from-[#1b2424] via-[#0f2121] to-[#003030] text-white hover:bg-gradient-to-l hover:from-[#1b2424] hover:via-[#0f2121] hover:to-[#003030] font-semibold rounded hover:cursor-pointer shadow-lg shadow-black/30 mr-[20px] duration-200 ease-out p-3 "
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}