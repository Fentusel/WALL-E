'use client';
import React from 'react';
import RegisterBtn from '../ui/register-btn';
import { app } from "@/lib/firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function LoginForm() {
    const auth = getAuth(app);

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const login = async (e) => {
        e.preventDefault();
        await signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log('Logged in user:', user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error('Login error:', errorCode, errorMessage);
            });
    }
    return (
        <form action="/login"
              method="POST"
              className=" flex flex-col gap-4 p-6 h-[600px] w-[500px] border border-transparent rounded-lg shadow-2xl ">
            <label htmlFor="email" className="text-white font-semibold self-center">Email</label>
            <input type="email"
                   id="email"
                   name="email"
                   required className="rounded-[4px] px-[5px] bg-gray-300 text-black"/>
            <br/>
            <label htmlFor="password" className="text-white font-semibold self-center">Password</label>
            <input type="password"
                   id="password"
                   name="password"
                   required className="rounded-[4px] px-[5px] bg-gray-300 text-black"/>
            <br/>
            <div className="flex justify-around items-center">
                <button type="submit"
                        className="text-white font-semibold bg-[#1E2929] px-[25px] py-[11px] self-center rounded-md text-lg hover:cursor-pointer hover:bg-[#273837] ">Log In
                </button>
                <RegisterBtn>Register</RegisterBtn >
            </div>
        </form>
    );
}