'use client';
import React, { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import LoginBtn from '../ui/login-btn';
import {useRouter} from 'next/navigation';

export default function SignUpForm() {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState(null);

    const router = useRouter();

    const handleRegister = async (e) => {
        e.preventDefault();
        setError(null);

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            await updateProfile(user, { displayName: userName });
            router.push('/routes/home');
        } catch (error) {
            const errorMapping = {
                'auth/email-already-in-use': 'Email is already in use.',
                'auth/invalid-email': 'Invalid email address.',
            };
            setError(errorMapping[error.code] || "unexpected error occurred. Please try again.");
            }
    }

    return (
        <form onSubmit= { handleRegister }
              className=" flex flex-col justify-center gap-3 p-6 h-[600px] w-[500px] border border-transparent rounded-lg shadow-2xl ">
            {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded relative self-center w-full text-center">
                    <span className="block sm:inline text-sm">{error}</span>
                </div>
            )}
            <label htmlFor="username" className="text-white font-semibold self-center">Username</label>
            <input type="text"
                   name="username"
                   required
                   value={userName}
                   onChange={e => setUserName(e.target.value)}
                   className="rounded-[4px] px-[5px] bg-gray-300 text-black"/>
            <br/>
            <label htmlFor="email" className="text-white font-semibold self-center">Email</label>
            <input type="email"
                   name="email"
                   required
                   onChange = {(e) => setEmail(e.target.value)}
                   className="rounded-[4px] px-[5px] bg-gray-300 text-black"/>
            <br/>
            <label htmlFor="password" className="text-white font-semibold self-center">Password</label>
            <input type="password"
                   name="password"
                   onChange = {(e) => setPassword(e.target.value)}
                   required
                   className="rounded-[4px] px-[5px] bg-gray-300 text-black"/>
            <br/>
            <label htmlFor="confirm-password" className="text-white font-semibold self-center">Confirm Password</label>
            <input type="password"
                   name="confirm_password"
                   onChange={(e) => setConfirmPassword(e.target.value)}
                   required
                   className="rounded-[4px] px-[5px] bg-gray-300 text-black"/>
            <br/>
            <div className="flex justify-around items-center">
                <button type="submit"
                        className="text-white font-semibold bg-[#1E2929] px-[25px] py-[11px] self-center rounded-md text-lg hover:cursor-pointer hover:bg-[#273837] ">Register
                </button>
                <LoginBtn>Log In</LoginBtn>
            </div>
        </form>
    )
}