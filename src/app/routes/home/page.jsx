'use client';
import React, {useState, useEffect} from "react";
import {auth, db} from "@/lib/firebase";
import {onAuthStateChanged} from "firebase/auth";
import {useRouter} from "next/navigation";
import {doc, setDoc, getDoc} from "firebase/firestore";


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
            <header className="p-4 bg-gray-800 text-white">
                <h1 className="text-2xl font-bold">Welcome to the Home Page</h1>
            </header>
            <main className="flex flex-grow justify-center items-center bg-[linear-gradient(180deg,rgba(9,9,11,1)_0%,rgba(15,15,20,1)_23%,rgba(15,15,20,1)_24%,rgba(15,23,26,1)_65%,rgba(17,30,33,1)_100%)]">
                <p className="text-white text-lg">This is the main content area.</p>
            </main>
        </div>
    );
}
