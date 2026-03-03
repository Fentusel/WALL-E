'use client';
import React, { useEffect, useState } from 'react';
import { auth } from '@/lib/firebase';
import { sendEmailVerification, reload, signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';

export default function VerifyEmailPage() {
    const [user, setUser] = useState(null);
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    useEffect(() => {
        const currentUser = auth.currentUser;
        if (!currentUser) {
            router.push('/routes/login');
        } else if (currentUser.emailVerified) {
            router.push('/routes/home');
        } else {
            setUser(currentUser);
        }
    }, [router]);

    // Check if the user has verified their email yet
    const handleRefreshStatus = async () => {
        try {
            await reload(auth.currentUser); // This forces Firebase to fetch the latest user data
            if (auth.currentUser.emailVerified) {
                router.push('/routes/home');
            } else {
                setMessage("Still not verified. Please check your inbox again!");
            }
        } catch (err) {
            setError("Failed to refresh. Please try again.");
        }
    };

    const handleResendEmail = async () => {
        try {
            await sendEmailVerification(auth.currentUser);
            setMessage("Verification email resent!");
        } catch (err) {
            setError("Too many requests. Please wait a moment.");
        }
    };

    const handleLogout = async () => {
        await signOut(auth);
        router.push('/routes/login');
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-[linear-gradient(180deg,rgba(9,9,11,1)_0%,rgba(15,15,20,1)_23%,rgba(15,15,20,1)_24%,rgba(15,23,26,1)_65%,rgba(17,30,33,1)_100%)] p-6 text-center">
            <div className="bg-gray-900 border border-gray-700 p-8 rounded-xl shadow-2xl max-w-md w-full space-y-6">
                <h1 className="text-3xl font-bold text-white">Verify Your Email</h1>
                <p className="text-gray-300">
                    We've sent a verification link to <br/>
                    <span className="font-semibold text-blue-400">{user?.email}</span>
                </p>

                {message && <p className="text-green-400 text-sm">{message}</p>}
                {error && <p className="text-red-400 text-sm">{error}</p>}

                <div className="flex flex-col gap-4">
                    <button
                        onClick={handleRefreshStatus}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition"
                    >
                        I've Verified My Email
                    </button>

                    <button
                        onClick={handleResendEmail}
                        className="text-gray-400 hover:text-white text-sm underline decoration-gray-600"
                    >
                        Resend Verification Link
                    </button>

                    <button
                        onClick={handleLogout}
                        className="text-red-400 hover:text-red-300 text-sm"
                    >
                        Wrong email? Log out
                    </button>
                </div>
            </div>
        </main>
    );
}