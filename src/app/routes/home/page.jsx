'use client';
import React, {useState, useEffect} from "react";
import {auth, db} from "@/lib/firebase";
import {onAuthStateChanged} from "firebase/auth";
import {useRouter} from "next/navigation";
import {doc, setDoc, getDoc} from "firebase/firestore";
import Sidebar from "@/components/layout/Sidebar";
import { User } from 'lucide-react';


export default function HomePage() {
    const router = useRouter();
    const [loading, setLoading] = useState (true)
    const [user,setUser] = useState(null);

    const [role, setRole] = useState("job-seeker")
    const [title, setTitle] = useState("");
    const [ skills, setSkills] = useState("");
    const [bio, setBio] = useState("");
    const [exp, setExp] = useState("");

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            if (currentUser) {
                if(!currentUser.emailVerified) {
                    router.push('/routes/verify-email');
                    return;
                }
                setUser(currentUser);
            } else {
                router.push('/routes/login');
            }
            setLoading(false);
        });
        return () => unsubscribe();
    }, [router]);

    const handleSaveProfile = async (e) => {
        e.preventDefault();
        if (!user) return;

        try {
            const useRef = doc(db, "users", user.uid);}
            catch (error) {
            console.error("Error saving profile: ", error);
            }
    }

    return (
        <div className="flex flex-col min-h-screen w-full">
            <header className="p-6 px-[100px] bg-[#09090B] text-white">
                <ul className="flex justify-between">
                    <li className="text-2xl font-bold">WALL-E</li>
                    <li className="flex items-end"><User className=" size-7"/></li>
                </ul>
            </header>
            <div className="flex flex-1 relative">
                <Sidebar/>
                <main className="flex flex-grow justify-center items-center bg-[linear-gradient(180deg,rgba(9,9,11,1)_0%,rgba(15,15,20,1)_23%,rgba(15,15,20,1)_24%,rgba(15,23,26,1)_65%,rgba(17,30,33,1)_100%)]">
                    <p className="text-white text-lg">This is the main content area.</p>
                </main>
            </div>
        </div>
    );
}
