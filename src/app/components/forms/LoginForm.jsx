'use client';
import React, {useState} from 'react';
import RegisterBtn from '../ui/register-btn';
import { auth } from '@/lib/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';


export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const logIn = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (error) {
            console.error("Error logging in:", error);
        }
    }

    return (
        <form action="/login"
              method="POST"
              className=" flex flex-col justify-center gap-4 p-6 h-[400px] w-[500px] border border-transparent rounded-lg shadow-2xl ">
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
            <div className="flex justify-around items-center">
                <button type="submit"
                        onClick={logIn}
                        className="text-white font-semibold bg-[#1E2929] px-[25px] py-[11px] self-center rounded-md text-lg hover:cursor-pointer hover:bg-[#273837] ">Log In
                </button>
                <RegisterBtn>Register</RegisterBtn >
            </div>
        </form>
    );
}