'use client';
import React, {useState} from 'react';
import RegisterBtn from '../ui/register-btn';
import { auth } from '@/lib/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/navigation';


export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const router = useRouter();
    const handleLogin = async (e) => {
        e.preventDefault();
        setError(null);
        try {
            await signInWithEmailAndPassword(auth, email, password);
            router.push('/routes/home');
        } catch (error) {
            const errorMapping = {
                'auth/invalid-email': 'Invalid email or password.',
                'auth/user-not-found': 'Invalid email or password.',
                'auth/wrong-password': 'Invalid email or password.',
                'auth/invalid-credential': 'Invalid email or password.',
                'auth/too-many-requests': 'Too many failed attempts. Please try again later.'
            };
            setError(errorMapping[error.code]);
        }
    }

    return (
        <form
            className=" flex flex-col justify-between gap-3 p-6 h-[450px] w-[500px] border border-transparent rounded-lg shadow-2xl"
            onSubmit={handleLogin}>
            <div className=" flex flex-col gap-2 mt-[10px] text-white text-[15px]">
                <h3 className="font-semibold">
                    Login to your account
                </h3>
                <p className="opacity-70">
                    Enter your email and password below to log in.
                </p>
            </div>
            <label htmlFor="email" className="text-white font-semibold self-center">Email</label>
            <input type="email"
                   name="email"
                   onChange ={(e) => setEmail(e.target.value)}
                   required
                   className="rounded-[4px] px-[5px] bg-gray-300 text-black"/>
            <br/>
            <label htmlFor="password" className="text-white font-semibold self-center">Password</label>
            <input type="password"
                   name="password"
                   onChange = {(e) => setPassword(e.target.value)}
                   required
                   className="rounded-[4px] px-[5px] bg-gray-300 text-black"/>
            <br/>

            {error && <p className="text-red-500 text-sm self-center">{error}</p>}

            <div className="flex justify-around items-center">
                <button type="submit"
                        className="text-white font-semibold bg-[#1E2929] px-[25px] py-[11px] self-center rounded-md text-lg hover:cursor-pointer hover:bg-[#273837] ">Log In
                </button>
                <RegisterBtn>Register</RegisterBtn >
            </div>
        </form>
    );
}