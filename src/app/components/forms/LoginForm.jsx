'use client';
import React from 'react';
// import Link from 'next/link';
import RegisterBtn from '../ui/register-btn';

export default function LoginForm() {
    return (
        <form action="/register"
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