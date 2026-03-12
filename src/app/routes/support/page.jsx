'use client';
import React, { useState } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Support() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addDoc(collection(db, "supportTickets"), {
                name,
                email,
                message,
                createdAt: serverTimestamp(),
                status: "open"
            });
            setSuccess(true);
            setName("");
            setEmail("");
            setMessage("");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-[#0f0f14] text-white">
            <header className="w-full h-16 bg-[#09090b] px-20 flex justify-between items-center">
                <Link href="/" className="text-white text-2xl font-bold hover:text-[#8cc6d4] hover:cursor-pointer">
                    <span className="flex items-center gap-2">
                        <ArrowLeft className="size-7"/>
                        WALL-E
                    </span>
                </Link>
            </header>
            <div className="flex justify-center items-center flex-grow">
                <div className="w-[500px] bg-[#19191f] p-8 rounded-xl shadow-lg">
                    <h1 className="text-2xl font-bold mb-6">
                        Contact Support
                    </h1>
                    {success && (
                        <p className="text-green-400 mb-4">
                            Message sent successfully!
                        </p>
                    )}
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <input
                            type="text"
                            placeholder="Your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="bg-[#09090B] p-3 rounded outline-none"
                            required
                        />
                        <input
                            type="email"
                            placeholder="Your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="bg-[#09090B] p-3 rounded outline-none"
                            required
                        />
                        <textarea
                            placeholder="Your message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="bg-[#09090B] p-3 rounded h-[150px] outline-none"
                            required
                        />
                        <button
                            type="submit"
                            className="bg-[#283d69] hover:bg-[#3c5382] p-3 rounded font-semibold"
                        >
                            Send Message
                        </button>
                    </form>

                </div>
            </div>
        </div>
    );
}